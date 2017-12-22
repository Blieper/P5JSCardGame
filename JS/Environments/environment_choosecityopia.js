class Environment_ChooseCityopia extends Environment {
    
    constructor () {
        super();

        this.cardPrawnKing  = new Card("King Prawn");
        this.cardPeasant1   = new Card("Dave");
        this.cardPeasant2   = new Card("Peasant 2");       
        this.cardPeasant3   = new Card("Peasant 3");       
        this.cardPeasant4   = new Card("Peasant 4");       
        
        let oldPressed = this.cardPrawnKing.onUnpressed;
        this.cardPrawnKing.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(function(){
                game_environment.onFinishedTransition();
                game_environment = new Environment_Dialogue(new Prawnking);
                game_environment.setup();
            }, 500);
        }

                
        oldPressed = this.cardPeasant1.onUnpressed;
        this.cardPeasant1.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(function(){
                game_environment.onFinishedTransition();
                game_environment = new Environment_Dialogue(new Dave);
                game_environment.setup();
            }, 500);
        }

        for (let i = 0; i <= cards.length - 1; i++) {
            cards[i].anchor = anchorTypes.CENTER;
            cards[i].x = -(cards.length * -0.5 + (i + 0.5)) * 130;
            cards[i].y = -100 * (i+1) - 400;  
            
            cards[i].moveTo(cards[i].x,0,0.35 * (i+1) / cards.length)
        }
    }
    
    onTransition () {
        for (let i = 0; i <= cards.length - 1; i++) {
            cards[i].moveTo(cards[i].x,-100 * (i+1) - 400,0.35 * (i+1) / cards.length);
        }
    }

    onFinishedTransition() {
        this.destroyAll();
    }

}