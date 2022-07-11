# Phrase Hunter

## Description
**Phrase hunter** is a phrase guessing game that is built using object oriented programming concepts. A player has five attempts to guess the correct phrase.

The game was built as an OOP project as part of the [Teamtreehouse fullstack JavaScript techdegree](https://teamtreehouse.com/tracks/full-stack-javascript). 

## About
The game uses two classes: `Game`, and `Phrase`. A new Game object is created on start, and the board is populated. The `app.js` file handles user events.

The **`Game`** class contains these methods:
* Initializes the game
* Selects a random phrase
* Handles player interaction
* Counts remaining letters
* Removes player lives on incorrect guess
* Checks for a win after each correct guess
* Checks for a loss after each incorrect guess
* Ends the game and displays the game over screen
* Resets the game

The **`Phrase`** class contains these methods:
* Adds the randomly selected phrase to the UI
* Checks a guessed letter for a match
* Displays a correctly guessed letter in the phrase

## Styling Updates
The following styles were updated within **`style.css`**:
* `:root`
    1. `--color-win` color was changed; added transparency
    2. `--color-lose` color was changed
    3. `--color-start` color was changed
* `.header` - changed color and added transparency to `color` property
* `.show` - changed color of `background-color`
* `.wrong` - changed color of `background` property
* `.lose` - changed color and added transparency to `background-color` property
