
//global gameplay variables

let card_width = 165;
let card_height = 320;

let gameplay_reputation = 0;
let gameplay_time = 12 * 60;
let gameplay_timestring = "12:00";
let gameplay_city = -1;
let gameplay_currentCity = -1;
let gameplay_completedCities = [];

//

let gameplay_card;
let gameplay_answerCards = [];
let gameplay_character;
let gameplay_replerp;
let gameplay_repchange;

let game_environment;
let game_prevenv;
let game_paused = false;
let game_muted = true;

let font_main;

let sound_btnHover;
let sound_btnClick;
let sound_songs = [];
let sound_lastSongs = [0];
let sound_lastId = 0;
let sound_currentSong;

let image_main;
let image_peasant;
let image_lord;

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
  CITY2:          4,   
  INTRO:          5,
  END:            6,
  CREDITS:        7,
};

function setToEnv (id, character) {
  
  if (game_environment) {
    if (game_environment.onFinishedTransition) {
      game_environment.onFinishedTransition();
    }
    game_environment.destroyAll();
  }

  switch (id) {
    case envids.MAIN:
      game_environment = new Environment_Mainmenu();
    break;
    case envids.MAP:
      game_environment = new Environment_Map();
    break;
    case envids.DIALOGUE:
      game_environment = new Environment_Dialogue(character);
    break;
    case envids.CITY1:
      game_environment = new Environment_ChooseCityopia();
    break;
    case envids.CITY2:
      game_environment = new Environment_ChooseCulturia();
    break; 
    case envids.INTRO:
      game_environment = new Environment_Introduction();
    break;
    case envids.END:
      game_environment = new Environment_Endscreen();
    break;
    case envids.CREDITS:
      game_environment = new Environment_Credits();
    break;
  }

  game_environment.setup();
}

function randomMusic () {
  if (game_muted) {
      for (let i = 0; i < sound_songs.length; i++) {
          sound_songs[i].setVolume(0);
      }
  } else {
      for (let i = 0; i < sound_songs.length; i++) {
          sound_songs[i].setVolume(1);
      }                    
  }

  setTimeout(function(){
 
    if (sound_lastSongs.length === sound_songs.length) {
      sound_lastSongs.length = 0;
      sound_lastSongs.push(sound_lastId);
    }

    let id = Math.floor(Math.random() * sound_songs.length);
    let idOf = sound_lastSongs.indexOf(id);

    while (idOf >= 0) {
      id = Math.floor(Math.random() * sound_songs.length);
      idOf = sound_lastSongs.indexOf(id);
    }

    sound_songs[id].play();
    sound_currentSong = sound_songs[id];
    sound_lastId = id;
    sound_lastSongs.push(id);

    randomMusic();

  }, sound_currentSong.duration() * 1000);
}

function preload() {
  font_main       = loadFont("Assets/Fonts/MorrisRomanBlack.ttf");
  sound_btnHover  = loadSound("Assets/Sounds/Foley/ButtonHover.mp3");
  sound_btnClick  = loadSound("Assets/Sounds/Foley/ButtonClick.mp3");  

  image_main    = loadImage('Assets/Images/tomb_king.png');
  image_peasant = loadImage('Assets/Images/peasant.png');
  image_lord    = loadImage('Assets/Images/lord.png');

  sound_songs.push(loadSound("Assets/Sounds/Music/Song1.mp3"));
  sound_songs.push(loadSound("Assets/Sounds/Music/Song2.mp3"));
  sound_songs.push(loadSound("Assets/Sounds/Music/Song3.mp3"));
}

function addTime (minutes) {
  gameplay_time += minutes;

  let hours = Math.floor(gameplay_time / 60);
  let formattedhours = hours % 24;
  var min = gameplay_time % 60;
  gameplay_timestring = "0".repeat(formattedhours < 10 ? 1 : 0) + formattedhours + ":" + "0".repeat(min < 10 ? 1 : 0)  + min;
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  console.log(innerWidth);

  setToEnv(envids.MAIN);

  sound_songs[0].play();
  sound_currentSong = sound_songs[0];
  randomMusic();
}

function draw() {
  clear();
  cursor(ARROW);

  // Update invironment if it isn't paused
  if (!game_paused) {
    game_environment.update();

    if (gameplay_character) {
      gameplay_character.update();
    }
  }

  // Update all clickables
  for (let i = 0; i < clickables.length; i++) {
    if (clickables[i] != undefined) {
      clickables[i].update();
    }
  }
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}