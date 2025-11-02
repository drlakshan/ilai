

This note outlines a structured workflow using Git to manage the lifecycle of a research idea, from initial exploration to integration as validated knowledge.

### The Workflow Steps

1.  **Start Branch:** Create an isolated git branch for the new research topic.
    *   `git checkout -b <research-branch-name>`
2.  **Explore:** Create and work in fleeting notes to capture initial thoughts and findings.
    *   *(This step involves file system operations, not git commands.)*
3.  **Iterate & Commit:** Periodically save your progress with descriptive commit messages.
    *   `git add . && git commit -m "Log of research progress"`
4.  **Synthesize:** Distill your findings into structured, atomic permanent notes.
    *   `git add . && git commit -m "Synthesis: Created permanent notes"`
5.  **Merge:** Integrate the validated new knowledge back into your main knowledge base.
    *   `git checkout main && git merge <research-branch-name>`
6.  **Cleanup:** Push your changes and delete the now-merged research branch.
    *   `git push origin main && git branch -d <research-branch-name>`


[[Branching Learning Hypotheses - Git Workflow for Clinical Research]]

