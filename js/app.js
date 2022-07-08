
const game = new Game();

document.querySelector('#overlay button').addEventListener('click', function () {
    game.startGame();
})

// Click event for keyboard display buttons
document.querySelector('#qwerty').addEventListener('click', function (e) {
    
    game.handleInteraction(e);
})




/**
document.querySelector('#qwerty').addEventListener('keydown', function (e) {
    
    if (e.target.tagName ==='BUTTON')
    console.log(e.target.key);
    // game.handleInteraction(e.key);
})
//  */