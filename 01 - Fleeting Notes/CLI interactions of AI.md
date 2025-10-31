# How to Use AI in the Terminal

Based on the YouTube video "You NEED to Use AI in the Terminal RIGHT NOW!!" by Network Chuck.

The primary advantage of using AI in the terminal is to gain more control over your projects, data, and AI context, breaking free from the limitations of browser-based interfaces.

---

## 1. Getting Started with Gemini CLI

Google's Gemini CLI is a great starting point because of its generous free tier.

### Installation

*   **For most systems (requires npm/Node.js):**
    ```bash
    npm install -g @google/gemini-cli
    ```
    *If you encounter permissions issues, you may need to run it with `sudo`.*

*   **For macOS (using Homebrew):**
    ```bash
    brew install gemini-cli
    ```

### Initial Setup and Usage

1.  **Create a Project Directory:** It's best practice to create a dedicated folder for each project.
    ```bash
    mkdir coffee-project
    cd coffee-project
    ```

2.  **Launch Gemini:**
    ```bash
    gemini
    ```

3.  **Log In:** The first time you launch, it will prompt you to log in with your Google account through a browser window.

4.  **Start Chatting:** You can now ask questions directly. The CLI shows you the model being used (e.g., Gemini 1.5 Pro) and the percentage of the context window remaining.

### Superpowers: File System Access & Context Management

The terminal version of Gemini can interact with your local files.

1.  **Writing Files:** You can ask Gemini to research a topic and save the output directly to a file.
    > **Example Prompt:** "Research the top 10 ways to make coffee from reputable sources, compile the results into a document named `Best-Coffee-Method.md`, and create an outline for a blog plan."
    *Gemini will ask for permission before creating files on your computer.*

2.  **Persistent Context with `gemini.md`:** To maintain context between sessions, you can initialize a context file.
    *   **Create the context file:**
        ```
        /init
        ```
        This command analyzes the files in your current directory and creates a `gemini.md` file, which contains context about your project.
    *   **How it works:** Every time you start `gemini` in that directory, it loads `gemini.md` into its context. This means you don't have to re-explain your project every time you start a new chat. You can ask it to update this file with your progress.

---

## 2. Using Claude Code (Claude in the Terminal)

Claude Code is a more powerful, feature-rich option, considered a "daily driver" by the video's creator. It requires a Claude Pro subscription.

### Installation

*   **Requires npm/Node.js:**
    ```bash
    npm install -g @anthropic-ai/claude-code
    ```

### Initial Setup and Usage

1.  **Launch Claude:** In your project directory, run:
    ```bash
    claude
    ```

2.  **Log In:** It will prompt you to log in with your Claude Pro account.

3.  **Context File:** Similar to Gemini, you can initialize a context file.
    ```
    /init
    ```
    This creates a `claude.md` file to store project context.

### Key Feature: Agents

Agents are like separate instances of Claude that you can delegate tasks to, each with its own fresh context window. This prevents your main conversation from getting bloated.

1.  **Create an Agent:**
    *   Run `/agents`.
    *   Select "Create a new agent."
    *   Define its purpose (e.g., "You are a home lab research expert").
    *   Grant it access to tools and select a model.

2.  **Use an Agent:** You can call an agent within your chat by using the `@` symbol followed by the agent's name.
    > **Example Prompt:** "@homelab-guru, research the best NAS for a home lab with a budget of $500."

### Key Feature: Output Styles

You can change Claude's persona or response format by creating and switching between output styles.

1.  **Create an Output Style:**
    *   Run `/output-style new`.
    *   Describe the persona (e.g., "You are a scriptwriting expert who gives brutal, honest feedback.").

2.  **Switch Styles:** Run `/output-style` and select the one you want to use.

### Running without Permissions

To run commands without being prompted for permission each time (use with caution):
```bash
claude --dangerously-skip-permissions
```
To resume a previous chat, use the `-r` flag.

---

## 3. Using Open Code (Open-Source Alternative)

Open Code is a versatile, open-source tool that can work with various models, including Grok (free for a limited time), local models (via Ollama), and Claude.

### Installation

*   **Requires npm/Node.js:**
    ```bash
    npm install -g @opencode/cli
    ```

### Usage

1.  **Launch Open Code:**
    ```bash
    opencode
    ```

2.  **Switch Models:** Use the `/model` command to switch between available models (e.g., Grok, Claude Sonnet, or local models you've configured).

3.  **Using Local Models:**
    *   You need to have a tool like **Ollama** running with the desired models downloaded (e.g., Llama 3.2).
    *   Edit the Open Code config file (`~/.config/opencode/opencode.jsonc`) to add your local model details.

4.  **Log in to Claude:** You can link your Claude Pro account to use it within Open Code.
    ```bash
    opencode auth login
    ```

---

## 4. The Ultimate Workflow: Using Multiple AIs Together

The real power comes from using these tools simultaneously on the same project.

1.  **Shared Directory:** Open Gemini, Claude, and Codex (or Open Code) in separate terminal tabs *within the same project directory*.

2.  **Synced Context:** Keep the context files (`gemini.md`, `claude.md`, `agents.md`) synchronized. You can create a Claude agent to automate this.

3.  **Assign Roles:** Use each AI for its strengths.
    *   **Claude/Gemini:** For deep work, research, and content generation.
    *   **ChatGPT/Codex:** For high-level analysis, brainstorming, and reviewing.

4.  **End-of-Day Syncing:** Create a "session closer" agent in Claude that:
    *   Summarizes the day's work.
    *   Updates all context files (`claude.md`, `gemini.md`, etc.).
    *   Commits the project changes to a Git repository for version history.

This workflow keeps your project organized, version-controlled, and allows you to leverage the best of each AI model, all while maintaining full ownership of your data on your local machine.