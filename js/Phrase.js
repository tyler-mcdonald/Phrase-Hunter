class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
     * Display hidden phrase
     */
    addPhraseToDisplay() {
        const chars = this.phrase.split('');
        const ul = document.querySelector('#phrase ul');

        // Create li for each letter
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
            
            ul.appendChild(li);
        })
    }


    /**
     * Check if phrase contains the guessed letter
     * @param {string} letter the guessed letter from player input
     * @returns {boolean} boolean value indicating yes/no match
     */
    checkLetter(letter) {
        const regex = new RegExp(`[${this.phrase}]`,'g');
        const isMatch = regex.test(letter);
        return isMatch;
    }
        
    
    /**
     * Reveal any matched letters contained in the phrase
     */
    showMatchedLetter(matchedLetter) {
        const phraseLetters = document.querySelectorAll('#phrase li');

        for (let letter of phraseLetters) {
            if (letter.textContent === matchedLetter) {
                letter.classList.add('show');
                letter.classList.remove('hide');
            }
        }
    }
}