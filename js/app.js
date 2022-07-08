
/** 
 * when Start Game button is clicked:
 * 

 * 
 * 
 * when user clicks a letter
 *      if letter exists in the phrase
 *          display all matching letters in the phrase
 *      else if letter does not exist
 *          remove a heart from the player
 * 
 * when phrase has been revealed
 *      end game
 * */ 
const game = new Game();

document.querySelector('#overlay button').addEventListener('click', function () {
    game.startGame();

    // hide start screen overlay
    document.querySelector('#overlay').style.visibility = 'hidden';

    // display a random phrase
})

document.querySelector('#qwerty').addEventListener('click', function (e) {
    
    game.handleInteraction(e);
    
})



/** Testing */
// const phrase = new Phrase('Hello');
// phrase.addPhraseToDisplay();