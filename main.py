# main.py
from transformers import pipeline

model = pipeline("summarization", model="facebook/bart-large-cnn")
response = model("The quick brown fox jumps over the lazy dog. The lazy dog was not happy about  russiun fighter it." , max_length=10)
print(response)