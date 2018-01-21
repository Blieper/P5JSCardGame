
//global gameplay variables

let card_width = 110;
let card_height = 200;

let gameplay_reputation = 0;
let gameplay_time = 12 * 60;
let gameplay_timestring = "12:00";

//

let gameplay_card;
let gameplay_answerCards = [];
let gameplay_character;
let gameplay_replerp;
let gameplay_repchange;

let game_environment;
let game_prevenv;
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

let envids = {
  MAIN:           0,
  MAP:            1,   
  DIALOGUE:       2,  
  CITY1:          3, 
};

function setToEnv (id, character) {
  
  if (game_environment) {
    if (game_environment.onFinishedTransition) {
      game_environment.onFinishedTransition();
    }
    game_environment.destroyAll();
  }

  switch (id) {
    case 0:
      game_environment = new Environment_Mainmenu();
    break;
    case 1:
      game_environment = new Environment_Map();
    break;
    case 2:
      game_environment = new Environment_Dialogue(character);
    break;
    case 3:
      game_environment = new Environment_ChooseCityopia();
    break;
  }

  game_environment.setup();
}

function addTime (minutes) {
  gameplay_time += minutes;

  let hours = Math.floor(gameplay_time / 60);
  let formattedhours = hours % 24;
  var min = gameplay_time % 60;
  gameplay_timestring = "0".repeat(formattedhours < 10 ? 1 : 0) + formattedhours + ":" + "0".repeat(min < 10 ? 1 : 0)  + min;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  setToEnv(envids.MAIN);
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