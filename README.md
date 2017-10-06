# Flashcard-Generator

A basic flashcard application with a backend that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"George Washington was the first president of the United States."_

...We can create a "cloze deletion" by removing the words _"George Washington"_:

_"... was the first president of the United States."_

The flash card is built in three parts:

1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_

2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.

3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._

