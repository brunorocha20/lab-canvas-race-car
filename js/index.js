/** @type {HTMLCanvasElement} */

// initial setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create the player (car)
const car = new Component(218, 550, 60, 100, ctx);

// Create the game
let game = new Game(ctx, 500, 700, car);



// Move left and right - Keybindings
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      if (car.x < 430) {
        car.x += 13;
      }
      break;
    case 'ArrowLeft':
      if (car.x > 10) {
        car.x -= 13;
      }
      break;
  }
});

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
};
