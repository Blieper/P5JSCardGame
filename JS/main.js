//This is the main 'gameplay' script that has cards, a character and whatever

//global gameplay variables

  let card_width  = 150;
  let card_height = 250;

  let gameplay_card;
  let gameplay_answerCards = [];
  let gameplay_character;

//


function setup() {  
  createCanvas(windowWidth, windowHeight);
  
  setToNewCharacter(new John());
}

function setToNewCharacter (character) {
  gameplay_character = character;
  setToNewCard(0);
}

function setToNewCard (index) {
  console.log(index);

  //Delete all previous cards to save performance
  for (i = cards.length-1; i > 0; i--) {
    cards[i].delete();
  }

  cards.length = 0;
  gameplay_answerCards.length = 0;

  gameplay_card = new Card(gameplay_character.event[index].text);

  gameplay_card.isClickable = false;
  gameplay_card.x = width/2;
  gameplay_card.y = 150;

  for (let i = 0; i < gameplay_character.event[index].options.length; i++) {
    gameplay_answerCards[i] = new Card(gameplay_character.event[index].options[i].response);
    gameplay_answerCards[i].nextIndex = gameplay_character.event[index].options[i].next; 

    if (gameplay_character.event[index].options[i].f != undefined) {
      gameplay_answerCards[i].func = gameplay_character.event[index].options[i].f;
      console.log(gameplay_answerCards[i].func);
    }

    gameplay_answerCards[i].x = width/2 - (gameplay_answerCards.length * -0.5 + (i + 0.25)) * 400;
    gameplay_answerCards[i].y = height - 200; 
  }
}

function draw() {
  clear();

  //Update all clickables
  for (let i = 0; i < clickables.length; i++) {
    if (clickables[i] != undefined) {
      clickables[i].update();

      if (clickables[i].isMoving) {
        clickables[i].move(clickables[i].targetX, clickables[i].targetY, clickables[i].speed);
      }
    }else{
      console.log("Undefined card!");
    }
  }
}
