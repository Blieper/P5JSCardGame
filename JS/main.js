//This is the main 'gameplay' script that has cards, a character and whatever

var card_width  = 150;
var card_height = 250;

function setup() {  
  card = new Card();
  card.clickable.x = 500;
  card.clickable.y = 500;

  //card.moveTo(100,200,0.1);

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();

  for (let i = 0; i < clickables.length; i++) {
    clickables[i].update();

    if (clickables[i].isMoving) {
      clickables[i].move(clickables[i].targetX, clickables[i].targetY, clickables[i].speed);
    }
  }
}