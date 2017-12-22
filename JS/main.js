
//global gameplay variables

let card_width = 110;
let card_height = 200;

let gameplay_reputation = 0;
let gameplay_time = 0;

//

let gameplay_card;
let gameplay_answerCards = [];
let gameplay_character;
let gameplay_replerp;
let gameplay_repchange;

let game_environment;
let game_paused = false;
let game_muted = false;

let anchorTypes = {
  TOPLEFT:        0,
  LEFT:           1,  
  BOTTOMLEFT:     2,  
  TOP:            3,                                          
  CENTER:         4,   
  BOTTOM:         5,  
  TOPRIGHT:       6,
  RIGHT:          7,  
  BOTTOMRIGHT:    8,                       
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  game_environment = new Environment_Mainmenu();
}

function draw() {
  clear();
  cursor(ARROW);

  if (!game_paused) {
    // Update environment 
    game_environment.update();
  }

  // Update all clickables
  for (let i = 0; i < clickables.length; i++) {
    if (clickables[i] != undefined) {
      clickables[i].update();
    }
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }