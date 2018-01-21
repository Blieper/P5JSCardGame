class Environment_Mainmenu extends Environment {

    constructor () {
        super();

        this.startButton = new Clickable(0,height,200,50,anchorTypes.CENTER);
        this.startButton.text = "START GAME";
        this.startButton.onlyUnpressOverButton  = true;
        this.startButton.isClickable = false;

        let oldPressed = this.startButton.onUnpressed;

        this.startButton.onUnpressed = function () {
            oldPressed();

            game_environment.onTransition();
            setTimeout(setToEnv(envids.MAP), 500);

            this.delete();
        }

        this.cl_seat   = new Clickable(-220 - 1000,150,100,100,anchorTypes.TOP);
        this.cl_seat.text        = "SEAT";
        this.cl_seat.textSize    = 78;
        this.cl_seat.drawFrame   = false;
        this.cl_seat.isClickable = false;

        setTimeout(function(){game_environment.cl_seat.moveTo(-220,150,0.5)}, 250);

        this.cl_of     = new Clickable(-30,140 - 1000,100,100,anchorTypes.TOP);
        this.cl_of.text        = "OF";
        this.cl_of.textSize    = 48;
        this.cl_of.drawFrame   = false;
        this.cl_of.isClickable = false;

        setTimeout(
            function(){
                game_environment.cl_of.moveTo(-30,110,0.5);
                game_environment.startButton.moveTo(0,0,0.25);
                setTimeout(function(){game_environment.startButton.isClickable = true},500);
            }
        , 1050);

        this.cl_burden = new Clickable(250 + 1000,150,100,100,anchorTypes.TOP);
        this.cl_burden.text        = "BURDEN";
        this.cl_burden.textSize    = 78;
        this.cl_burden.drawFrame   = false;   
        this.cl_burden.isClickable = false;   

        setTimeout(function(){game_environment.cl_burden.moveTo(250,150,0.5)}, 750);
    }
    
    onTransition () {
        this.cl_seat.moveTo(-220,-500,0.02);
        this.cl_of.moveTo(-30,-500,0.02);
        this.cl_burden.moveTo(250,-500,0.02);
    }

    onFinishedTransition() {
        this.destroyAll();
    }
}