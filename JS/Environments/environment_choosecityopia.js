class Environment_ChooseCityopia extends Environment {
    
    constructor () {
        super();

        // Back button
        this.backButton = new Clickable(50,-50,75,50,anchorTypes.BOTTOMLEFT);
        this.backButton.text = "back";
        this.backButton.anchorX = 0;
        this.backButton.anchorY = 1;

        gameplay_currentCity = envids.CITY1;
        
        // this.time   = new Clickable(0,100,100,100,anchorTypes.TOP);
        // this.time.text        = gameplay_timestring;
        // this.time.textSize    = 48;
        // this.time.drawFrame   = false;
        // this.time.isClickable = false;
        let oldPressed = this.backButton.onUnpressed;

        this.backButton.onUnpressed = function () {
            oldPressed();
            setToEnv(envids.MAP);
        }

        this.cardPrawnKing  = new Card("King Prawn");
        this.cardPeasant1   = new Card("HAHSAHHF"); 

        this.cardPrawnKing.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(function(){
                game_environment.onFinishedTransition();
                setToEnv(envids.DIALOGUE,new Prawnking);
            }, 500);
        }

        this.cardPeasant1.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(function(){
                game_environment.onFinishedTransition();
                setToEnv(envids.DIALOGUE,null);
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