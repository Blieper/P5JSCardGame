// This is the base class for 'Environments'

class Environment {
    
    constructor () {
        // Settings button
        this.settingsButton = new Clickable(-50,-50,50,50,anchorTypes.BOTTOMRIGHT);
        this.settingsButton.text = "settings";
        this.settingsButton.anchorX = 1;
        this.settingsButton.anchorY = 1;

        this.settingsButton.onUnpressed = function () {

            for (let i = 0; i < clickables.length; i++) {
                clickables[i].isActive = false;
                clickables[i].paused = true;
            }

            this.backButton = new Clickable(-50,-50,50,50,anchorTypes.BOTTOMRIGHT);
            this.backButton.text = "back";
            this.backButton.anchorX = 1;
            this.backButton.anchorY = 1;
            this.backButton.onlyUnpressOverButton = true;
            
            game_paused = true;

            this.fsButton = new Clickable(-200,-100,200,50,anchorTypes.CENTER);
            this.fsButton.text = "toggle fullscreen";
            this.fsButton.onlyUnpressOverButton = true;
            this.fsButton.onUnpressed = function () {
                var fs = fullscreen();
                fullscreen(true);
            }

            this.smButton = new Clickable(200,-100,200,50,anchorTypes.CENTER);
            this.smButton.text = game_muted ? "sound: muted" : "sound: unmuted";
            this.smButton.onlyUnpressOverButton = true;
            this.smButton.onUnpressed = function () {
                game_muted = !game_muted;
                this.text = game_muted ? "sound: muted" : "sound: unmuted";
            }

  
            this.settingsText = new Clickable(0,100,200,50,anchorTypes.TOP)
            this.settingsText.isClickable = false;
            this.settingsText.text = "SETTINGS";
            this.settingsText.drawFrame = false;
            this.settingsText.textSize = 48;

            this.backButton.onUnpressed = function () {
    
                for (let i = 0; i < clickables.length; i++) {
                    clickables[i].isActive = true;
                    clickables[i].paused = false;
                }
                
                game_paused = false;
                game_environment.settingsButton.fsButton.delete();
                game_environment.settingsButton.smButton.delete();
                game_environment.settingsButton.settingsText.delete();

                this.delete();
            }
        }
    }

    update () {

    }

    setup () {

    }

    destroyAll () {
        // while (clickables.length) {
        //     clickables[clickables.length-1].delete();
        // }

        clickables.length = 0;

        cards.length = 0;
    }

}