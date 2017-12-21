// This is the base class for 'Environments'

class Environment {
    
    constructor () {
        // Settings button
        this.settingsButton = new Clickable(-25,-25,50,50,anchorTypes.BOTTOMRIGHT);
        this.settingsButton.text = "*";
        this.settingsButton.anchorX = 1;
        this.settingsButton.anchorY = 1;
    }

    update () {

    }

    setup () {
        
    }

}