---
status:
  - seedling
category: 
aliases: 
sr-due: 2023-11-15
sr-interval: 248
sr-ease: 330
Summary:
---





# Note

Runnablelambda is a class in Langchain that converts python callable / function into a Runnable object

1. It takes a single input
2. Sync and async support
3. Integration with pipelines

```python
from langchain_core.runnables import RunnableLambda 

	def add_one(x): return x + 1 
	runnable = RunnableLambda(add_one) 
	result = runnable.invoke(5) 
	print(result) # Output: 6
```


an advanced use case

```python

from langchain_core.prompts import ChatPromptTemplate 
from langchain_openai import ChatOpenAI 

prompt = ChatPromptTemplate.from_template("Tell me a fact about {topic}") 

model = ChatOpenAI() 

def extract_fact(text): return text.split("\n\n")[-1] 

chain = prompt | model | RunnableLambda(extract_fact) 
result = chain.invoke({"topic": "pandas"}) 
print(result)
```
# Context:



Learning about langchain chaining came across this class called RunnableLambda. It is versatile in that, it can chain multiple python functions to create one great chain.





###### References


Certainly! I'd be happy to teach you about RunnableLambda in LangChain. RunnableLambda is a powerful tool that allows you to integrate custom Python functions into your LangChain pipelines. Let's break it down:

## What is RunnableLambda?

RunnableLambda is a class in LangChain that converts a Python callable (function) into a Runnable object. This allows you to use custom functions within LangChain's pipeline architecture.

## Key Features:

1. **Single Input**: RunnableLambda expects a single input argument. If your function needs multiple arguments, you'll need to pass them as a dictionary.

2. **Sync and Async Support**: It supports both synchronous and asynchronous functions.

3. **Integration with Pipelines**: You can use RunnableLambda as part of a larger chain or pipeline using the | operator.

## Basic Usage:

Here's a simple example of how to use RunnableLambda:

```python
from langchain_core.runnables import RunnableLambda

def add_one(x):
    return x + 1

runnable = RunnableLambda(add_one)

result = runnable.invoke(5)
print(result)  # Output: 6
```

## Advanced Usage:

1. **Multiple Arguments**: If your function requires multiple arguments, you can pass them as a dictionary:

```python
def multiply(inputs):
    return inputs['x'] * inputs['y']

runnable = RunnableLambda(multiply)
result = runnable.invoke({'x': 5, 'y': 3})
print(result)  # Output: 15
```

2. **Async Functions**: RunnableLambda supports async functions:

```python
import asyncio

async def async_add_one(x):
    await asyncio.sleep(1)  # Simulate async operation
    return x + 1

runnable = RunnableLambda(async_add_one)
result = asyncio.run(runnable.ainvoke(5))
print(result)  # Output: 6
```

3. **Chaining with Other Runnables**: You can use RunnableLambda in a pipeline:

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_template("Tell me a fact about {topic}")
model = ChatOpenAI()

def extract_fact(text):
    return text.split("\n\n")[-1]

chain = prompt | model | RunnableLambda(extract_fact)

result = chain.invoke({"topic": "pandas"})
print(result)
```

## Best Practices:

1. **Keep Functions Simple**: RunnableLambda works best with straightforward functions that have a clear input and output.

2. **Handle Errors**: Make sure your functions handle potential errors gracefully.

3. **Use Type Hints**: While not required, using type hints can make your code more readable and catch potential errors early.

4. **Consider Performance**: If your function is computationally expensive, consider how it might affect the overall performance of your pipeline.

RunnableLambda is a versatile tool that allows you to seamlessly integrate custom logic into your LangChain pipelines. It's particularly useful when you need to perform data preprocessing, postprocessing, or any custom operations that aren't covered by built-in LangChain components.

Citations:
[1] https://api.python.langchain.com/en/latest/runnables/langchain_core.runnables.base.RunnableLambda.html
[2] https://glasp.co/discover?url=python.langchain.com%2Fdocs%2Fexpression_language%2Fhow_to%2Ffunctions
[3] https://stackoverflow.com/questions/46523931/java-runnable-lambda-function-and-methods-of-class
[4] https://python.langchain.com/v0.1/docs/expression_language/primitives/functions/
[5] https://github.com/langchain-ai/langchain/discussions/16627
[6] https://www.youtube.com/watch?v=zREUGA_v3xc
[7] https://www.pinecone.io/learn/series/langchain/langchain-expression-language/
[8] https://www.reddit.com/r/LangChain/comments/1dso9pj/custom_functions_with_runnablelambda_in_langchain/
[9] https://github.com/langchain-ai/langchain/discussions/14172
[10] https://github.com/langchain-ai/langchain/discussions/16428
[11] https://www.geeksforgeeks.org/how-to-create-thread-using-lambda-expressions-in-java/
[12] https://stackoverflow.com/questions/57621964/is-there-a-method-reference-way-to-express-a-runnable-lambda-that-does-nothing
[13] https://www.tutorialspoint.com/how-to-implement-the-runnable-interface-using-lambda-expression-in-java
[14] https://www.codejava.net/java-core/the-java-language/java-8-lambda-runnable-example
[15] https://stackoverflow.com/questions/38369808/execute-runnable-lambda-with-more-than-on-threads-using-scheduledexecutorservice


###### Related




