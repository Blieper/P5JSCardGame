var cards = [];

function Card () {
    this.clickable = new Clickable(0, 0, card_width, card_height, this);
    this.clickable.hoverScale = 1.05;
    this.clickable.displayText = 'wda daw daw uhdiauw hdiuawh idhia hiduwhiduha i';

    this.pressed = function () {
        this.clickable.moveTo(mouseX,mouseY,0.1);
    }
}


