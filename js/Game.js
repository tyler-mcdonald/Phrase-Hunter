class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Quality Time'),
            new Phrase('Knock Your Socks Off'),
            new Phrase('What Goes Up Must Come Down'),
            new Phrase('Just keep swimming'),
            new Phrase('May the Force be with you'),
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
     * Checks if chosen letter exists in phrase and updates game
     * @param {object} element The event target element.
     */
    handleInteraction(button) {
        
        const chosenLetter = button.textContent;
        const letterIsMatch = this.activePhrase.checkLetter(chosenLetter);
        button.disabled = true;

        if (letterIsMatch) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(chosenLetter);
            this.checkForWin();
        } else  { 
            button.classList.add('wrong');
            this.removeLife();
            this.checkForLose();
        }
    }


    /**
     * @returns {integer} number of hidden letters remaining.
     */
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
     * Removes one life from the scoreboard.
     */
    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard img');
        const lostHeart = hearts[this.missed];
        lostHeart.src = 'images/lostHeart.png';
        this.missed += 1;
    }


    /**
     * Calls gameOver() after 0 letters remain hidden
     */
    checkForWin() {
        if (this.countHiddenLetters() === 0) {
            this.gameOver();
        }
    }

    /**
     * Calls gameOver() after 5 guess attempts
     */
    checkForLose() {
        if (this.missed === 5) {
            this.gameOver();
        }
    }


    /**
     * Displays end game overlay and a resulting message to the user
     */
    gameOver() {

        const overlay = document.querySelector('#overlay');
        const endMessage = document.querySelector('.title');
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.style.visibility = 'visible';

        if (this.missed === 5) {
            overlay.classList.add('lose');
            endMessage.textContent = 'GAME OVER';
            gameOverMessage.textContent = 'Try again';
        } else {
            overlay.classList.add('win');
            gameOverMessage.textContent = `${this.activePhrase.phrase}`;
            endMessage.textContent = 'You win!!!';
        }
    }

    /**
     * Sets game back to original state
     */
    resetGame() {

        // Lives
        this.missed = 0;
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');

        // Keyboard
        const keyboardButtons = document.querySelectorAll('#qwerty button');
        keyboardButtons.forEach(button => {
            button.classList.remove('chosen', 'wrong');
            button.disabled = false;
        });

        // Phrase
        const phrase = document.querySelectorAll('#phrase li');
        phrase.forEach(phrase => phrase.remove());

        // End screen overlay
        document.querySelector('#overlay').classList.remove('win', 'lose');

    }
}