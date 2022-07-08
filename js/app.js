

const game = new Game();
// console.log(game.phrases[0]);

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
// game.getRandomPhrase.addPhraseToDisplay();
