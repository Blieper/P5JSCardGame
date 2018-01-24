class Environment_ChooseCulturia extends Environment {
    
    constructor () {
        super();

        // Back button
        this.backButton = new Clickable(50,-50,50,50,anchorTypes.BOTTOMLEFT);
        this.backButton.text = "back";
        this.backButton.anchorX = 0;
        this.backButton.anchorY = 1;

        gameplay_currentCity = envids.CITY2;

        this.backButton.onUnpressed = function () {
            setToEnv(envids.MAP);
        }

        this.cardPrawnKing  = new Card("King Culture");
        this.cardPeasant1   = new Card("Koert"); 
        
        let oldPressed = this.cardPrawnKing.onUnpressed;
        this.cardPrawnKing.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(function(){
                game_environment.onFinishedTransition();
                setToEnv(envids.DIALOGUE,new Prawnking);
            }, 500);
        }

                
        oldPressed = this.cardPeasant1.onUnpressed;
        this.cardPeasant1.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(function(){
                game_environment.onFinishedTransition();
                setToEnv(envids.DIALOGUE,new Dave);
            }, 500);
        }

        for (let i = 0; i <= cards.length - 1; i++) {
            cards[i].anchor = anchorTypes.CENTER;
            cards[i].x = -(cards.length * -0.5 + (i + 0.5)) * card_width * 1.5;
            cards[i].y = -100 * (i+1) - height/2;  
            
            cards[i].moveTo(cards[i].x,0,0.35 * (i+1) / cards.length)
        }
    }
    
    onTransition () {
        for (let i = 0; i <= cards.length - 1; i++) {
            cards[i].moveTo(cards[i].x,-100 * (i+1) - height/2,0.35 * (i+1) / cards.length);
        }
    }

    onFinishedTransition() {
        game_environment.destroyAll();
    }

}