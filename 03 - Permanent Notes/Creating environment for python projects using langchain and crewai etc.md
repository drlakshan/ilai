2024-07-04






# Context

Before we start the project we need to create an environement
we can use poetry for that.
we need to install it.  (Follow this [Poetry installation tutorial](https://python-poetry.org/docs/#installation) to install Poetry on your system)

# Note


#crewai
#langchain
#AI 

```bash

poetry install --no-root

```


and toml file pyproject.toml\
	
```python
python
[tool.poetry]
name = "langchain-crash-course"
version = "0.1.0"
description = "Everything you need to know to get started with LangChain"
authors = ["bhancock_ai <brandon@brandonhancock.io>"]

[tool.poetry.dependencies]
python = ">=3.10.0,<3.12"
langchain-openai = "^0.1.8"
python-dotenv = "^1.0.1"
langchain = "^0.2.1"
langchain-community = "^0.2.1"
langchain-anthropic = "^0.1.15"
langchain-google-genai = "^1.0.5"
langchain-google-firestore = "^0.3.0"
firestore = "^0.0.8"
chromadb = "^0.5.0"
tiktoken = "^0.7.0"
sentence-transformers = "^3.0.0"
bs4 = "^0.0.2"
firecrawl-py = "^0.0.13"
langchainhub = "^0.1.18"
wikipedia = "^1.4.0"
tavily-python = "^0.3.3"
```


this is the way brandon starts his projects

there are other ways like conda pyenv

[[how to make sure you are in the correct python interpreter path for your poetry virtual environment]]


