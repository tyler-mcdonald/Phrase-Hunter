

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
     * Display blank box placeholders on page representing the characters in the phrase 
     */
    addPhraseToDisplay() {
        const chars = this.phrase.split('');

        // create a list item for each letter
        const phraseUL = document.querySelector('#phrase ul');
        chars.forEach(char => {

            const li = document.createElement('li');
            li.textContent = char;
            if (char === ' ') {
                li.classList.add('space');
            } /** else if (char === ',') {
                li.classList.add('show'); 
            } */ else {
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(char);
            }
            
            phraseUL.appendChild(li);
        })
    }


    /**
     * Check to see if guessed letter matches any letter in the phrase 
     */
    checkLetter(letter) {
        const regex = new RegExp(`[${this.phrase}]`,'g');
        const isMatch = regex.test(letter);
        return isMatch;
    }
        
    
    /**
     * Reveal all matched letters from player's selection
     */
    showMatchedLetter(matchedLetter) {
        /** Show letters by replacing class 'hide' with 'show' */
        const phraseLetters = document.querySelectorAll('#phrase li');

        // Add 'show' class to matched letter
        for (let letter of phraseLetters) {
            if (letter.textContent === matchedLetter) {
                letter.classList.add('show');
                letter.classList.remove('hide');
            }
        }
    }
}