class Environment_Endscreen extends Environment {
    constructor () {
        super();

        this.story = [];

        this.story.push(
            "You did it!"
        );

        this.story.push(
            "You're now known as the worthy King of Culturia!"
        );

        this.startButton = new Clickable(0,-100,200,50,anchorTypes.BOTTOM);
        this.startButton.text = "NEXT";
        this.startButton.onlyUnpressOverButton  = true;

        let oldPressed = this.startButton.onUnpressed;

        this.startButton.onUnpressed = function () {
            oldPressed();

            game_environment.currentStory++;

            console.log(game_environment.currentStory);

            if (game_environment.currentStory == game_environment.story.length) {
                setToEnv(envids.CREDITS);
                this.delete();
            }
        }

        this.currentStory = 0;
    }

    update () {
        image(image_main,0,0,width,width/1920 * 1080);
 
        if (this.story[this.currentStory] != undefined) {
            textAlign(LEFT);
            textSize(24);
            textFont(font_main);
            text(this.story[this.currentStory],width/8,height/8,width * 0.75,height * 0.75);
        }
    }

}