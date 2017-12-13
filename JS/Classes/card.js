//Base class for each card.

var cards = [];

class Card extends Clickable {

    constructor (text = "") {
        super(0,0,card_width,card_height);
        this.hoverScale = 1.05;
        this.text = text;

        this.nextIndex = 0;
        this.cards = [];
        
        cards.push(this);
    }

    func () {return;}
    
    onPressed() {
        this.func ();
        setToNewCard(this.nextIndex);
    }

}
