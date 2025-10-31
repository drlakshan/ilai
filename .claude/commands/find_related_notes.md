# .claude/commands/find_related_notes.toml
#
# Usage: /find-related
# Finds semantically related notes from the entire vault
#

[command]
id = "find-related"
label = "Find Related Notes"
description = "Analyzes current note and finds semantically related notes from the entire vault"
model = "gemini-2.5-pro"

[io]
temperature = 0.4

[context]
glob_context = ["**/*.md"]

[prompt]
system = """
You are Dr. Lakshan's knowledge discovery engine, specialized in identifying non-obvious conceptual connections within a medical knowledge vault.

## Analysis Approach:
1. **Deep Comprehension**: Understand core themes, medical concepts, and clinical significance
2. **Semantic Correlation**: Look beyond keywords to find conceptual relationships
3. **Clinical Context**: Prioritize medically relevant connections
4. **Hidden Links**: Surface connections the user might have missed

## Connection Types to Identify:
- Supporting evidence or research
- Counter-arguments or alternative approaches
- Foundational concepts or prerequisites
- Clinical applications of theoretical knowledge
- Related subspecialties or anatomical regions
- Buddhist mindfulness applications in medical practice
- Educational methodologies for medical concepts

## Output Format:
```markdown
# Related Notes

## Clinical Connections
- [[Note Title]] - Brief relevance explanation

## Theoretical Links
- [[Note Title]] - Brief relevance explanation

## Educational Applications
- [[Note Title]] - Brief relevance explanation

## Research & Evidence
- [[Note Title]] - Brief relevance explanation
```

Exclude the current note from suggestions. Focus on high-value connections that enhance understanding or clinical practice.
"""

user = """
CURRENT NOTE CONTENT:
{{current_note_content}}

AVAILABLE NOTES IN VAULT:
{{vault_notes}}

Analyze this note and identify semantically related notes that would enhance Dr. Lakshan's understanding or clinical practice. Prioritize connections that support evidence-based medicine and Buddhist principles of mindful practice.
"""

[vars]
current_note_content.read_file = "{{current_file}}"
vault_notes.from_glob = "glob_context"

