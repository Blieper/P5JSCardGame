//This is the main 'gameplay' script that has cards, a character and whatever

//global gameplay variables

let card_width = 150;
let card_height = 250;

let gameplay_reputation = 0;

//

let gameplay_card;
let gameplay_answerCards = [];
let gameplay_character;
let gameplay_replerp;
let gameplay_repchange;

function setup() {
  createCanvas(windowWidth, windowHeight);

  setToNewCharacter(new John());
}

function changeReputation(changeAmount) {
  gameplay_repchange = "" + changeAmount;

  if (gameplay_repchange >= 0) {
    gameplay_repchange = "+" + gameplay_repchange;
  }

  gameplay_replerp = 1;
  gameplay_reputation += changeAmount;
}

function setToNewCharacter(character) {
  gameplay_character = character;
  setToNewCard(1);
}

function setToNewCard(index) {
  // Delete all previous cards to save performance
  for (let i = cards.length - 1; i >= 0; i--) {
    cards[i].delete();
  }

  // Empty the card arrays
  cards.length = 0;
  gameplay_answerCards.length = 0;

  // Make a new card for the main message
  gameplay_card = new Card(gameplay_character.event[index].text);
  gameplay_card.isClickable = false;

  let x = width / 2;
  let y = 150;

  gameplay_card.x = x;
  gameplay_card.y = y - 350;

  gameplay_card.moveTo(x,y,0.15);

  // Only make answer cards if we have answers
  if (gameplay_character.event[index].options) {
    // Loop through each answer
    for (let i = 0; i < gameplay_character.event[index].options.length; i++) {
      // Make a card for each answer, and set it's parameters
      gameplay_answerCards[i] = new Card(gameplay_character.event[index].options[i].response);
      gameplay_answerCards[i].nextIndex = gameplay_character.event[index].options[i].next;

      let oldPressed = gameplay_answerCards[i].onUnpressed;

      // Change the card's onUnpresed function so it switches to a new answer
      gameplay_answerCards[i].onUnpressed = function () {
        oldPressed();

        if (gameplay_answerCards[i].nextIndex) {
          setToNewCard(gameplay_answerCards[i].nextIndex);
        }

        if (gameplay_character.event[index].options[i].rep) {
          changeReputation(gameplay_character.event[index].options[i].rep);
        } else {
          changeReputation(0);
        }

        // Extra optional function
        if (gameplay_character.event[index].options[i].f != undefined) {
          gameplay_character.event[index].options[i].f();
        }
      }

      // Position and move the cards 
      let x = width / 2 - (gameplay_character.event[index].options.length * -0.5 + (i + 0.5)) * 200;
      let y = height - 200;

      gameplay_answerCards[i].x = x;
      gameplay_answerCards[i].y = y + 350;

      gameplay_answerCards[i].moveTo(x,y,0.15);
    }
  }
}

function draw() {
  clear();
  cursor(ARROW);

  // Update all clickables
  for (let i = 0; i < clickables.length; i++) {
    if (clickables[i] != undefined) {
      clickables[i].update();
    }
  }

  // Reputation change
  if (gameplay_replerp > 0.1) {
    gameplay_replerp += -gameplay_replerp * 0.025;

    if (gameplay_replerp < 0.05) {
      gameplay_replerp = 0;
    }

    textAlign(CENTER, CENTER);
    textSize(48 * gameplay_replerp);
    text(gameplay_repchange, width / 2, height / 2);
  }
}
