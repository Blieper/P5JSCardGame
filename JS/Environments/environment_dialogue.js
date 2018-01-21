class Environment_Dialogue extends Environment {

    constructor (character) {
        super();

        gameplay_character = character;
    }

    setup () {
        this.setToNewCard(1);        
    }

    update () {
        // Reputation change
        if (gameplay_replerp > 0.1) {
            gameplay_replerp += -gameplay_replerp * 0.0125;

            if (gameplay_replerp < 0.05) {
                gameplay_replerp = 0;
            }

            textAlign(CENTER, CENTER);
            textSize(48 * gameplay_replerp);
            text(gameplay_repchange, width / 2, height / 2);
        }       
    }
    
    setToNewCard(index) {
        // Delete all previous cards
        for (let i = cards.length - 1; i >= 0; i--) {
            cards[i].delete();
        }
      
        // Empty the card arrays
        cards.length = 0;
        gameplay_answerCards.length = 0;
      
        // Only make answer cards if we have answers
        if (gameplay_character.event[index]) {
            gameplay_card = new Card(gameplay_character.event[index].text);
            gameplay_card.isClickable = false;
        
            //responsiveVoice.speak(gameplay_card.text);
        
            let x = width / 2;
            let y = 150;
        
            gameplay_card.x = x;
            gameplay_card.y = y - 350;
        
            gameplay_card.moveTo(x, y, 0.15);

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
                            game_environment.setToNewCard(gameplay_answerCards[i].nextIndex);
                        }
                
                        if (gameplay_character.event[index].options[i].rep) {
                            game_environment.changeReputation(gameplay_character.event[index].options[i].rep);
                        } else {
                            game_environment.changeReputation(0);
                        }
                
                        // Extra optional function
                        // if (gameplay_character.event[index].options[i].f != undefined) {
                        //     gameplay_character.event[index].options[i].f();
                        // }
                    }
            
                    // Position and move the cards 
                    let x = width / 2 - (gameplay_character.event[index].options.length * -0.5 + (i + 0.5)) * 200;
                    let y = height - 200;
            
                    gameplay_answerCards[i].x = x;
                    gameplay_answerCards[i].y = y + 350;
            
                    gameplay_answerCards[i].moveTo(x, y, 0.15);
                }
            }else{
                if (gameplay_character.reputation >= gameplay_character.reputationNeeded) {
                    gameplay_card.text = gameplay_character.convincedMessage;
                    console.log(gameplay_city);
                    gameplay_completedCities[gameplay_city] = true;
                }
            
                // OK card
                let okCard = new Card("OK");

                let x = width / 2;
                let y = height - 200;
        
                okCard.x = x;
                okCard.y = y + 350;
        
                okCard.moveTo(x, y, 0.15);

                let oldPressed = okCard.onUnpressed;
    
                okCard.onUnpressed = function () {
                    oldPressed();

                    gameplay_card.delete();
                    this.delete();
                    setToEnv(envids.CITY1);
                    addTime(gameplay_character.conversationTime);
                }
            }
        }
        else{
            setTimeout(function(){
                setToEnv(envids.CITY1);
                addTime(gameplay_character.conversationTime);
            }, 1500);      
        }
    }

    changeReputation(changeAmount) {
        gameplay_repchange = "" + changeAmount;
      
        if (gameplay_repchange >= 0) {
          gameplay_repchange = "+" + gameplay_repchange;
        }
      
        gameplay_replerp = 1;
        gameplay_character.reputation += changeAmount;
    }

}