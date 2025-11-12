# Gemini CLI Configuration for Medical Vault

## Folder Exclusions
**PRIVACY & CONTEXT OPTIMIZATION**: The following folders are excluded from AI indexing via `.gitignore`:

### Excluded Folders
1. **`04 - Files/`** - Large binary files (PDFs, images, videos)
   - Reason: Token efficiency, large file sizes
   - Access: Use direct file references when specific content needed

2. **`10 - Reviews/journal/`** - Personal journal entries
   - Reason: Privacy, personal reflections
   - Access: NEVER include in AI context

## Gemini CLI Usage Notes

### Respecting Exclusions
Gemini CLI automatically respects `.gitignore` patterns. When using `--all_files`, these folders will be excluded:
```bash
# This will exclude both 04 - Files/ and 10 - Reviews/journal/
gemini --all_files -p "Analyze vault structure"
```

### Explicit Folder Targeting
When using specific folder paths, avoid the excluded directories:
```bash
# Good - targets included folders
gemini -p "@03\ -\ Permanent\ Notes/ @01\ -\ Fleeting\ Notes/ Synthesize ENT knowledge"

# Bad - explicitly includes excluded folder
gemini -p "@10\ -\ Reviews/journal/ Analyze my journal"  # DON'T DO THIS
```

### Best Practices
- Use `@` notation for folder targeting to respect exclusions
- Review `.gitignore` before using `--all_files` flag
- Access excluded files directly only when absolutely necessary
- Maintain privacy boundaries for personal journal content

## File Prioritization
**TOKEN EFFICIENCY**:
- Focus on `.md` and `.canvas` files
- Exclude binary formats unless specifically needed
- Respect privacy boundaries for personal content

---
**Last Updated**: 2025-11-12
