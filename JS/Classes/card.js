//Base class for each card.

let cards = [];

class Card extends Clickable {

    constructor(text = "") {
        super(0, 0, card_width, card_height);
        
        this.hoverScale             = 1.05;
        this.text                   = text;
        this.onlyUnpressOverButton  = true;

        this.textPaddingUp      = 15;
        this.textPaddingDown    = 15;
        this.textPaddingLeft    = 15;
        this.textPaddingRight   = 15;

        this.nextIndex  = 0;
        this.cards      = [];

        cards.push(this);
    }

}
