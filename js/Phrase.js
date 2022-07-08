

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    
    /**
     * Display blank box placeholders on page representing the characters in the phrase 
     */
    addPhraseToDisplay() {
        // const chars = this.phrase.split('');

        console.log(this.phrase);

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
    checkLetter() { 
        console.log(game.activePhrase);
    }
        // search the phrase for a matching letter
        
        // if a letter matches
            // return true
        // if no match
            // return false
    
        
    
    // nameInput: () => {
    //     const nameValue = nameInput.value;
    //     const nameIsValid = /\s*[^\s]+\s*/.test(nameValue); // name cannot be blank
    //     return nameIsValid;
    // }, 


    /**
     * Reveal all matched letters from player's selection
     */
    showMatchedLetter() {
        /** Show letters by replacing class 'hide' with 'show' */
    }
}