class Environment_Credits extends Environment {
    constructor () {
        super();

        this.startButton = new Clickable(0,-100,200,50,anchorTypes.BOTTOM);
        this.startButton.text = "PLAY AGAIN";
        this.startButton.onlyUnpressOverButton  = true;

        let oldPressed = this.startButton.onUnpressed;

        this.startButton.onUnpressed = function () {
            oldPressed();

            location.reload();
        }

        this.currentStory = 0;
    }

    update () {

        image(image_main,0,0,width,width/1920 * 1080);
        
        textAlign(LEFT);
        textSize(24);
        textFont(font_main);
        // text(
        //     "Yoran Mandema\n\tGame engine\n\tMusic\n\tSound Design\n\tGame Design"          
        // ,width/8,height/8,width * 0.75,200);

        // text(
        //     "Thomas Kraak\n\tArt\n\tStory\n\tGame Design"          
        // ,width/8 + 350,height/8,width * 0.75,200);

        // text(
        //     "Cyril Ozhoga\n\tArt\n\tStory\n\tGame Design"          
        // ,width/8 + 750,height/8,width * 0.75,200);

        // text(
        //     "Teun Vogt\n\tStory\n\tGame Design"          
        // ,width/8 + 1100,height/8,width * 0.75,200);

    }

}