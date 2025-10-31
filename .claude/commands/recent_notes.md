# /recent_notes - Custom Command

## Usage
```
/recent_notes [duration] [unit]
```

## Examples
- `/recent_notes 7 days` - Notes from last week
- `/recent_notes 2 weeks` - Notes from last 2 weeks
- `/recent_notes 1 month` - Notes from last month
- `/recent_notes 3 months` - Notes from last quarter

## Command Implementation

```bash
#!/bin/bash
# Usage: /recent_notes [duration] [unit]

DURATION=${1:-7}
UNIT=${2:-days}

case $UNIT in
    "days"|"day") FIND_TIME="-${DURATION}" ;;
    "weeks"|"week") FIND_TIME="-$((DURATION * 7))" ;;
    "months"|"month") FIND_TIME="-$((DURATION * 30))" ;;
    *) echo "Use: days, weeks, months"; exit 1 ;;
esac

echo "=== Notes from Last $DURATION $UNIT ==="

# Find recent .md files
NOTES=$(find . -name "*.md" -not -path "./Scripts/*" -mtime "$FIND_TIME" | sort -t/ -k2)

if [ -z "$NOTES" ]; then
    echo "No recent notes found"
    exit 0
fi

COUNT=$(echo "$NOTES" | wc -l | tr -d ' ')
echo "Found: $COUNT notes"
echo

# List with previews
for NOTE in $NOTES; do
    echo "📄 ${NOTE#./}"
    echo "   $(stat -f "%Sm" -t "%b %d, %H:%M" "$NOTE")"
    PREVIEW=$(head -5 "$NOTE" | grep -v '^#' | grep -v '^$' | head -1 | cut -c1-80)
    [ ! -z "$PREVIEW" ] && echo "   → $PREVIEW..."
    echo
done

# Summary
echo "=== Summary ==="
echo "$NOTES" | cut -d/ -f2 | sort | uniq -c | sort -nr
echo
echo "Recent tags:"
grep -h "#[a-zA-Z]" $NOTES 2>/dev/null | grep -o "#[a-zA-Z][a-zA-Z0-9_-]*" | sort | uniq -c | sort -nr | head -5
```

## Features
- **Quick Access**: `/recent_notes` format for easy command-line use
- **Flexible Timeframes**: Days, weeks, months supported
- **ENT-Focused**: Prioritizes medical notes, excludes system files
- **Smart Previews**: Shows first meaningful content line
- **Tag Analysis**: Displays recent tag usage patterns
- **Folder Breakdown**: Counts by note categories

## Output Format
```
=== Notes from Last 7 days ===
Found: 5 notes

📄 03 - Permanent Notes/ENT/Vestibular Assessment.md
   Sep 18, 14:30
   → Comprehensive vestibular migraine diagnostic approach...

📄 01 - Fleeting Notes/AI Research Ideas.md
   Sep 17, 09:15
   → Machine learning in otology diagnosis applications...

=== Summary ===
   3 03 - Permanent Notes
   2 01 - Fleeting Notes

Recent tags:
   4 #ent
   3 #vestibular
   2 #ai-healthcare
```