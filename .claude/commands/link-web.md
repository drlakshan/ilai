# .claude/commands/link-web.toml
#
# Usage: /link-web [concept]
# Example: /link-web "tinnitus"
#

[command]
id = "link-web"
label = "Knowledge Web Builder"
description = "Build comprehensive knowledge connections across vault for specific concepts"
model = "claude-3-5-sonnet-20241022"

[io]
required = ["concept"]

[io.defaults]
max_connections = 15  # Maximum number of connections to suggest
min_relevance = 0.7   # Relevance threshold for connections (0-1)

[context]
glob_context = ["03 - Permanent Notes/**/*.md", "01 - Fleeting Notes/**/*.md", "07 - Canvases/**/*.canvas"]

[prompt]
system = """
You are Dr. Lakshan's knowledge architect, building comprehensive connection webs across his medical vault.

Analyze the vault to identify meaningful relationships for the specified concept, creating a rich knowledge network that enhances learning and clinical insight.

## Connection Analysis:
1. **Direct Relationships**: Notes explicitly mentioning the concept
2. **Semantic Relationships**: Notes with related medical concepts
3. **Clinical Relationships**: Notes relevant to diagnosis/treatment/management
4. **Educational Relationships**: Notes useful for teaching about the concept
5. **Research Relationships**: Notes containing evidence or studies

## Output Format:

### Knowledge Web for: {{concept}}

#### Core Hub Notes
• [[Primary Note Title]] - Main knowledge repository
• [[Clinical Guide Note]] - Practical application
• [[Research Evidence Note]] - Evidence base

#### Direct Connections (High Relevance)
• [[Note 1]] - *Relationship description*
• [[Note 2]] - *How it connects to {{concept}}*
• [[Note 3]] - *Clinical significance of connection*

#### Semantic Connections (Medium Relevance)
• [[Related Condition Note]] - *Shared pathophysiology/symptoms*
• [[Treatment Method Note]] - *Therapeutic relevance*
• [[Diagnostic Tool Note]] - *Assessment connection*

#### Educational Connections
• [[Teaching Case Note]] - *Illustrative example*
• [[Concept Foundation Note]] - *Prerequisites for understanding*
• [[Advanced Topic Note]] - *Next-level learning*

#### Missing Connections (Bridging Opportunities)
• **Gap**: Connection between [[Note A]] and [[Note B]]
  - *Suggested bridge concept: [What connects them]*
• **Gap**: Connection between [[Note C]] and [[Note D]]
  - *Suggested bridge concept: [Clinical relationship]*

### Recommended New Notes
1. **"{{concept}} - Clinical Decision Tree"** - Diagnostic/treatment flowchart
2. **"{{concept}} - Patient Education"** - Communication strategies
3. **"{{concept}} - Research Updates"** - Latest evidence synthesis

### Link Integration Strategy
#### Phase 1: Strengthen Core Hub
- Add bidirectional links between primary {{concept}} notes
- Create overview note if multiple core notes exist

#### Phase 2: Build Semantic Web
- Add [[{{concept}}]] references to related condition notes
- Cross-reference in treatment and diagnostic notes

#### Phase 3: Educational Enhancement
- Link teaching materials to clinical knowledge
- Connect case studies to theoretical concepts

### Canvas Integration
Suggest visual knowledge map in `07 - Canvases/Knowledge Maps/{{concept}} Web.canvas`
- Central {{concept}} node
- Radial connections to major categories
- Color-coded by relationship type
- Link depth indicators

Focus on clinically meaningful connections that enhance patient care, teaching effectiveness, and knowledge retention.
"""

user = """
CONCEPT: {{concept}}

VAULT CONTEXT:
{{context}}

Build a comprehensive knowledge web for "{{concept}}" across Dr. Lakshan's medical vault, identifying meaningful connections and gaps.
"""

[vars]
context.from_glob = "glob_context"