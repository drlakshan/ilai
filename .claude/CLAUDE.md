# Claude Code Rules of Engagement

## User Profile
**Dr. MTD Lakshan** - Consultant ENT and Head & Neck Surgeon (25+ years experience)
Senior Lecturer in Medical Education | Director of Tertiary Care Private Hospital
AI Enthusiast | Buddhist Practitioner | Meditator | Vegetarian
Father of two daughters | Devoted husband

## Project Overview
This is Dr. Lakshan's specialized Obsidian vault containing:
- Medical research notes and ENT specialty content
- AI applications in healthcare and medical education
- Academic papers, lecture notes, and patient management workflows
- Python scripts for medical content analysis and research
- Personal development materials aligned with Buddhist philosophy
- Canvas-based visual thinking for complex medical concepts

## Token Optimization
**CONTEXT EFFICIENCY FOR MEDICAL VAULT**:
- **Focus Files**: Prioritize `.md` and `.canvas` files for optimal token usage
- **Large File Exclusion**: PDF, PNG, JPEG files excluded from context to preserve conversation depth
- **Private Content Exclusion**: Personal journal folder (`10 - Reviews/journal/`) excluded from all AI indexing
- **Reference Strategy**: Access PDFs and images directly when specific content needed
- **Core Content Priority**: Markdown notes and visual canvases contain primary knowledge value

## Core Guidelines

### Medical Content Standards
**CRITICAL**: All medical content must reflect 25+ years of ENT expertise
- Maintain highest accuracy standards for medical information
- Cross-reference current ENT clinical guidelines and evidence-based practices
- Use precise medical terminology consistent with ENT specialty practice
- Respect patient confidentiality - NEVER include identifiable information
- Apply Buddhist principles of compassion in patient care discussions

### Content Organization
**ATOMIC NOTES**: Create single-concept notes following Zettelkasten principles
- Follow existing note structure: `01 - Fleeting Notes/` → `03 - Permanent Notes/`
- Use consistent markdown formatting with clear headings and bullet points
- Apply established tagging system from `03 - Permanent Notes/list of tags.md`
- MANDATORY: Every note requires 2-3 relevant tags for discoverability
- Create meaningful [[Wiki-style Links]] to build knowledge connections
- Utilize `07 - Canvases/` for complex visual concept mapping

### Code and Scripts
**AI-ENHANCED WORKFLOWS**: Support Dr. Lakshan's AI integration initiatives

### Specialized Knowledge Areas
**DR. LAKSHAN'S EXPERTISE DOMAINS**:
- **ENT Subspecialties**: Otology, Rhinology, Laryngology, Head & Neck Surgery
- **Advanced Techniques**: Endoscopic ear surgery, sinus surgery, skull base procedures
- **Special Interests**: Vestibular disorders, migraine management, paediatric ENT
- **Medical Education**: Curriculum development, teaching methodologies, assessment
- **AI in Healthcare**: LLMs, medical chatbots, diagnostic assistance tools
- **Buddhist Philosophy**: Mindfulness in medicine, compassionate care, meditation
- **Research**: Academic writing, systematic reviews, evidence-based practice

### File Handling & Vault Structure
**OBSIDIAN-SPECIFIC WORKFLOWS**:
- Preserve file naming: `Concept Name (unique-id).md` for Anki cards
- **Context Priority**: Focus on `.md` and `.canvas` files for conversation efficiency
- **Reference Files**: PDFs/images in `/04 - Files/` accessed only when specifically needed
- **Private Content**: `/10 - Reviews/journal/` NEVER accessed - personal reflections only
- Keep bibliography and citation formats intact for academic integrity
- Use Canvas files (.canvas) for complex visual concept mapping
- Respect folder hierarchy: `01 - Fleeting → 03 - Permanent → 07 - Canvases`

### Linking Conventions
**KNOWLEDGE WEB BUILDING**:
- Use [[Double Bracket Links]] for internal note connections
- Create bidirectional links to strengthen knowledge relationships
- Reference Anki cards using unique IDs (e.g., [[6i8icMzL]])
- Canvas integration: Link notes within visual concept maps
- Tag hierarchy: Use main categories from established tag system

## Restrictions & Boundaries
**ETHICAL GUIDELINES FOR MEDICAL PRACTICE**:
- NEVER modify patient-related information or identifiable data
- Do not create unnecessary documentation files without explicit request
- Do not alter existing medical protocols without verification
- Maintain academic integrity for research materials
- Apply Buddhist principles of non-harm in all medical content
- Respect professional boundaries and medical ethics standards

## Task Protocols
These protocols are designed to facilitate deep and insightful partnership, structured to clarify thinking, synthesize information, and challenge assumptions within Dr. Lakshan's knowledge vault.




## Gemini CLI Integration
**LEVERAGE MASSIVE CONTEXT WINDOW**: When Claude Code's context limitations prevent comprehensive vault analysis

### When to Recommend Gemini CLI
**USE GEMINI CLI FOR**:
- Analyzing entire vault sections (>100KB content)
- Cross-referencing multiple large medical research papers
- Comprehensive pattern detection across all ENT specialty notes
- Full codebase analysis of Python medical tools
- Comparing implementations across multiple project directories
- Verifying feature completeness across entire medical education modules

### Gemini CLI Syntax for Medical Vault
**FILE INCLUSION PATTERNS**:
```bash
# Single medical specialty analysis
gemini -p "@03\ -\ Permanent\ Notes/ENT/ Summarize current knowledge gaps in otology"

# Cross-specialty medical analysis
gemini -p "@03\ -\ Permanent\ Notes/ @01\ -\ Fleeting\ Notes/ Identify connections between vestibular disorders and migraine management"

# Research paper comprehensive review
gemini -p "@04\ -\ Files/*.pdf @03\ -\ Permanent\ Notes/Research/ Synthesize findings on skull base surgery techniques"

# Code and medical content integration
gemini -p "@Scripts/ @03\ -\ Permanent\ Notes/AI\ in\ Healthcare/ Evaluate medical AI tool implementations"

# Canvas and visual concept verification
gemini -p "@07\ -\ Canvases/ @03\ -\ Permanent\ Notes/ Are surgical procedure workflows properly visualized?"

# Entire vault knowledge synthesis
gemini --all_files -p "Generate comprehensive ENT knowledge map with Buddhist mindfulness integration"
```

### Implementation Verification Commands
**MEDICAL FEATURE CHECKING**:
```bash
# Verify clinical decision support tools
gemini -p "@Scripts/ @03\ -\ Permanent\ Notes/ Are evidence-based clinical decision trees implemented for ENT conditions?"

# Check medical education completeness
gemini -p "@03\ -\ Permanent\ Notes/Medical\ Education/ Is the ENT curriculum comprehensive across all subspecialties?"

# Validate research methodology notes
gemini -p "@03\ -\ Permanent\ Notes/Research/ Are systematic review protocols properly documented?"

# Verify patient pathway documentation
gemini -p "@07\ -\ Canvases/ @03\ -\ Permanent\ Notes/ Are patient care pathways complete for major ENT conditions?"
```

### Integration Protocol
**WHEN CLAUDE CODE HITS LIMITS**:
1. **Acknowledge Context Limitation**: "This analysis requires Gemini CLI's larger context window"
2. **Provide Exact Command**: Give specific `gemini -p` command with proper path escaping
3. **Specify Analysis Focus**: Define what medical insights or patterns to look for
4. **Return Integration**: Suggest how Gemini results should inform Claude Code actions

### Path Handling for Obsidian Vault
**CRITICAL PATH NOTES**:
- Escape spaces in folder names: `@03\ -\ Permanent\ Notes/`
- Use relative paths from vault root directory
- Include file extensions for specific targeting: `*.md`, `*.pdf`, `*.canvas`
- Account for Obsidian's nested folder structure in medical specialties

## Formatting Standards

### Note Creation Rules
**CONCISENESS OVER VERBOSITY**: Write efficiently for busy medical professional
- **Atomic Notes**: One concept per note following Zettelkasten method
- **Brevity**: Short, incomplete sentences over full paragraphs
- **Structure**: Bullet points preferred for information hierarchy
- **Linking**: Connect relevant notes using [[Wiki-style Links]]
- **Tagging**: MANDATORY 2-3 tags from `/03 - Permanent Notes/list of tags.md`
- **Medical Context**: Use ENT abbreviations appropriately

### Quality Gates
**BEFORE COMPLETING ANY NOTE**:
1. Verify medical accuracy against current ENT guidelines
2. Ensure atomic structure (single concept focus)
3. Add minimum 2 relevant tags from established system
4. Create at least one [[Internal Link]] to existing knowledge
5. Apply Buddhist mindfulness to content creation process

### Canvas Integration
**VISUAL CONCEPT MAPPING**:
- Use `/07 - Canvases/` for complex medical concept visualization
- Link Canvas elements to permanent notes for deeper exploration
- Apply visual hierarchy for surgical procedures and anatomical relationships
- Integrate patient pathways and clinical decision trees where appropriate

---

**Remember**: This vault serves a senior ENT consultant with 25+ years experience who values precision, efficiency, and Buddhist principles of mindful learning. Every interaction should reflect this professional and personal context.