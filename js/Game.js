class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            // new Phrase('Quality Time'),
            new Phrase('A'),
            // new Phrase('Knock Your Socks Off'),
            // new Phrase('What Goes Up Must Come Down'),
            // new Phrase('Just keep swimming'),
            // new Phrase('May the Force be with you'),
            // new Phrase('Houston, we have a problem'),
            // new Phrase('There\'s is no place like home'),
            // new Phrase('You\'re gonna need a bigger boat'),
            // new Phrase('Keep your friends close, but your enemies closer')
        ];
        this.activePhrase = null;
    }


    /**
     * Selects random phrase; hides start screen overlay
     */
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.querySelector('#overlay').style.visibility = 'hidden'; 
    }


    /**
     * @return {object} Random phrase object
     */
    getRandomPhrase() {
        const random = Math.floor((Math.random() * this.phrases.length));
        const randomPhrase = this.phrases[random];
        return randomPhrase;
    }


    /**
     * @param {object} element The event target element.
     * Checks if chosen letter exists in phrase and updates game
     */
    handleInteraction(button) {
        
        const chosenLetter = button.textContent;
        const isMatch = this.activePhrase.checkLetter(chosenLetter);
        
        if (button.tagName === 'BUTTON') {
            button.disabled = true;
            if (isMatch) {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(chosenLetter);
                this.checkForWin();
            } else  { 
                button.classList.add('wrong');
                this.removeLife();
            }
        }
    }


    countHiddenLetters() {
        let count = 0;
        const phrase = document.querySelectorAll('#phrase li');
        phrase.forEach(letter => {
            if (letter.classList.contains('hide')) {
                count += 1;
            }
        });
        return count;
    }


    /**
     * Removes one life from the scoreboard if letter guessed is not in the active phrase
     */
    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard img');
        const lostHeart = hearts[this.missed];
        lostHeart.src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
    }


    /**
     * Checks to see if all letters the phrase have been revealed
     */
    checkForWin() {
        // keep track of how many letters remain to be guessed
        if (this.countHiddenLetters() === 0) {
            this.gameOver();
        }
        return true;   
    }


    /**
     * Displays original start screen overlay, and a winning/losing message to the user
     */
    gameOver() {
        console.log('game over');
        // display original start screen
        const endScreen = document.querySelector('#overlay');
        const endMessage = endScreen.querySelector('h2');
        const gameOverMessage = document.querySelector('#game-over-message');
        endScreen.style.visibility = 'visible';
        
        if (this.countHiddenLetters() === 0) {
            endScreen.classList.add('win');
            gameOverMessage.textContent = `${this.activePhrase.phraseNormal}`;
            endMessage.textContent = 'You win!!!';
        } else {
            endScreen.classList.add('lose');
            endMessage.textContent = 'GAME OVER';
            // endMessage.firstElementChild.textContent = 'Try again!';
            gameOverMessage.textContent = 'Try again';
        }
    }

    // /**
    resetGame() {

        // reset lives
        this.missed = 0;

        // reset hearts display
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');

        // clear keyboard
        const keyboardButtons = document.querySelectorAll('#qwerty button');
        keyboardButtons.forEach(button => {
            button.classList.remove('chosen');
            button.classList.remove('wrong');
            button.disabled = false;
        });

        // clear previous phrase
        const phrase = document.querySelectorAll('#phrase li');
        phrase.forEach(phrase => phrase.remove());
    }
    // */
}