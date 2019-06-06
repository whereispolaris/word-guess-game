# JavaScript Word Guess Game

- Press any key to get started!
- Wins: (# of times user guessed the word correctly).
- If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
- As the user guesses the correct letters, reveal them: m a d o _ _ a.
- Number of Guesses Remaining: (# of guesses remaining for the user).
- Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).


## PSEUDOCODE

### Sequence of Game
- A word from the array `countries[]`is selected randomly
    `Math.floor(Math.random() * countries.length);`
- Show how many letters the word is
    * write a loop that prints underscores for every letter

### When user presses letter:
- Check if `guessedLetter` existis in `pressedLetters[]`
    - Do nothing
- Check if `guessedLetter` exists in `selectedWord`
    - Push `guessedLetter` to `guessedWord` 
- Check if `selectedWord` === `guessedWord`
- Add `guessedLetter` to `pressedLetters[]` 

 
<!-- - if the letter is in `guessedLetters`
    * do nothing
- if the letter MATCHES one of the letters in the chosen word
    * add letter to word display
    * do not update number of guesses
    * add letter to `guessedLetters`
    * check if all letters have been guessed
- if the letter DOES NOT MATCH one of the letters in the chosen word
    * Reduce number of guesses by 1
    * add letter to `guessedLetters`
-  Add letter to `guessedLetters` -->