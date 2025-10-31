# Repository Guidelines

## Project Structure & Module Organization
- `01 - Fleeting Notes/` holds captures; keep frontmatter intact so mature ideas move into `03 - Permanent Notes/`.
- `02 - Literature Notes/` keeps cite keys with `@` prefixes and `zoteroLink` fields so summaries trace back to a source.
- `03 - Permanent Notes/` stores durable insights; ensure each note backlinks to its originating fleeting or literature entries.
- `04 - Files/`, `07 - Canvases/`, and `08 - Excalidraw/` store assets referenced by Markdown or canvas boards; keep links relative so they sync cleanly.
- `05 - Templates/` and `.obsidian/` define shared layouts and workspace settings; adjust templates here before sweeping changes across the vault.

## Build, Test, and Development Commands
Content does not compile, but run these checks before sharing:
- `open -a "Obsidian" .` opens the vault on macOS for validation; Windows contributors should open the folder directly from Obsidian.
- `rg -n "keyword" "03 - Permanent Notes"` prevents duplicate concepts and locates backlink targets.
- `npx markdownlint "**/*.md"` catches heading or spacing drift; configure once with `npm install -g markdownlint-cli`.

## Coding Style & Naming Conventions
Keep YAML frontmatter on every file and match template fields. A minimal fleeting note looks like:
```yaml
---
category: head and neck
aliases:
  - first bite syndrome
---
```
Write filenames in Title Case (literature notes keep the `@citekey` prefix), use level-6 headings for timestamped sections, and embed links as `[[Note Title]]`. Avoid tabs; stick to two-space indentation inside lists and YAML blocks.

## Testing Guidelines
- Follow each new link in preview mode to confirm Obsidian resolves it and that attachments live in `04 - Files/` or `08 - Excalidraw/`.
- Review the backlinks pane after edits so core topics still point to their supporting fleeting or literature notes.
- Export a spot check to `09 - Output/` with your preferred exporter and inspect formatting when canvases or tables change.

## Commit & Pull Request Guidelines
Adopt a `vault: short summary` commit style once the repository is versioned, grouping related note moves together. Pull requests should describe affected folders, mention template or plugin adjustments, and include screenshots for canvas updates.

## Security & Configuration Tips
Protect the Cryptomator artifacts in `09 - Output/`; do not hand-edit them or commit decrypted copies. Document any `.obsidian/` setting change in a permanent note so collaborators understand new plugins, hotkeys, or graph tweaks.
