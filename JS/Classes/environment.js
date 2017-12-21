// This is the base class for 'Environments'

class Environment {
    
    constructor () {
        // Settings button
        this.settingsButton = new Clickable(-50,-50,50,50,anchorTypes.BOTTOMRIGHT);
        this.settingsButton.text = "settings";
        this.settingsButton.anchorX = 1;
        this.settingsButton.anchorY = 1;
    }

    update () {

    }

    setup () {

    }

    destroyAll () {
        while (clickables.length) {
            clickables[clickables.length-1].delete();
        }

        clickables.length = 0;
    }

}