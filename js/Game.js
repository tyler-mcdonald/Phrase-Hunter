class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = [
            'Quality Time',
            'Knock Your Socks Off',
            'What Goes Up Must Come Down',
            'Just keep swimming',
            'May the Force be with you',
            // 'Houston, we have a problem',
            // // 'There\'s is no place like home',
            // // 'You\'re gonna need a bigger boat',
            // // 'Keep your friends close, but your enemies closer'
        ];
        this.activePhrase = activePhrase;
    }


    /**
     * Selects a random phrase and adds it to the board
     */
    startGame() {
        
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();

    }


    /**
     * Selects a random phrase in the phrases array and returns it
     */
    getRandomPhrase() {
        const random = Math.floor((Math.random() * this.phrases.length));
        const randomPhrase = this.phrases[random];
        // const phrase = new Phrase(randomPhrase);
        return randomPhrase;
    }

    /**
     * Check if button clicked by player matches anything in the activePhrase, then directs game based on result
     * @param {object} - The event object
     */
    handleInteraction(e) {
        
        const event = e.target;
        
        if (event.tagName === 'BUTTON') {
            console.log(event.textContent);
            event.disabled = true;
            event.classList.add('wrong')
        }
        
        // disable selected letter's onscreen keyboard button
            // if phrase does not include letter
                // add class 'wrong' to the letter
                // call removeLife()
            // if phrase includes letter
                // add classs 'chosen' to the letter
                // call showMatchedLetter()
                // call checkForWin()
                    // if win
                        // call gameOver()
    }










    /**
     * Removes one life from the scoreboard if letter guessed is not in the active phrase
     */
    removeLife() {
        // remove liveHeart.png
        // add lostHeart.png
        // increments 'missed' property
    }


    /**
     * Checks to see if all letters the phrase have been revealed
     */
    checkForWin() {

    }


    /**
     * Displays original start screen overlay, and a winning/losing message to the user
     */
    gameOver() {
        // display original start screen
        // replace overlay h1 element with 'win' or 'loss' message
        // replace overlay's 'start' class with class 'win' or 'lose'
    }
}