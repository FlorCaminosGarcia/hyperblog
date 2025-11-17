"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

client = OpenAI(
    base_url = "{{{baseURL}}}",
    api_key = "unused", # required for the API but not used
)

response = client.chat.completions.create(
    messages = [
{{#parameters.systemWithQuote}}
        {
            "role": "system",
            "content": {{{parameters.systemWithQuote}}},
        },
{{/parameters.systemWithQuote}}
{{#messages}}
        {
            "role": "{{role}}",
            "content": {{{content.0.textWithQuote}}},
        },
{{/messages}}
    ],
    model = "{{{model}}}",
{{#parameters.temperature}}
    temperature = {{.}},
{{/parameters.temperature}}
{{#parameters.top_p}}
    top_p = {{.}},
{{/parameters.top_p}}
)

print(response.choices[0].message.content)