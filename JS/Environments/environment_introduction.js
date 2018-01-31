class Environment_Introduction extends Environment {
    constructor () {
        super();

        this.story = [];

        this.story.push(
            "Tearing at its seams, the kingdom Culturia has long lived in fear of collapse. Your royal house holds little of the firm trust it's Lords once had. The King, your father, though honourable by heart, has shown weakness in his reign. All eyes were set on the succession of your brother to set straight his father's faults. His promise might have been fulfilled, had he not perished with him."
        );

        this.story.push(
            "Brittle, the throne now passes on to you. Your name means little to the nobility so eager to go on without you, and it is now your quest to change that. Go forth, and restore order under your family name. Prove yourself the rightfull king of Culturia."
        );

        this.story.push(
            "Convince the lords of Culturia to pledge fealty to you."
        );

        this.startButton = new Clickable(0,-100,200,50,anchorTypes.BOTTOM);
        this.startButton.text = "NEXT";
        this.startButton.onlyUnpressOverButton  = true;

        let oldPressed = this.startButton.onUnpressed;

        this.startButton.onUnpressed = function () {
            oldPressed();

            game_environment.currentStory++;

            if (game_environment.currentStory >= game_environment.story.length) {
                setToEnv(envids.MAP);
                this.delete();
            }
        }

        this.currentStory = 0;
    }

    update () {
        image(image_main,0,0,width,width/1920 * 1080);
        
        textAlign(LEFT);
        textSize(24);
        textFont(font_main);
        text(this.story[this.currentStory],width/8 - 100,height/8,width * 0.75,height * 0.75);
    }

}