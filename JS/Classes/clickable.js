//This is a clickable class. It's basically the base for every object in our game

var clickables = [];

function getClickableID (clickable) {
    for (let i = 0; i < clickables.length; i++) {
        if (clickables[i] == clickable) {
            return i;
        }
    }

    return -1;
}

class Clickable {

    constructor (x = 0, y = 0, width = 50, height = 25) {
        clickables.push(this);

        this.width  = width;
        this.height = height;
        this.x      = x;
        this.y      = y;

        this.isClickable = true;
        this.isActive = true;

        this.hoverScale  = 1;
        this.hoverScaler = 1;
        
        this.standardWidth    = this.width;
        this.standardHeight   = this.height;

        this.speed      = 0;
        this.targetX    = 0;
        this.targetY    = 0;

        this.textPaddingUp      = 2;
        this.textPaddingDown    = 2;
        this.textPaddingLeft    = 2;
        this.textPaddingRight   = 2; 

        this.isPressed   = false;
        this.onPressDown = false;
        this.onPressUp   = false;
        this.mouseIsOver = false;
        this.isMoving    = false;
        this.overPressed = false;

        this.mouseIsPressedTrack = mouseIsPressed;
        
        this.text = '';
    }

    render() {  
        if (!this.isPressed) {

        }else{
            this.hoverScaler = this.hoverScale * 0.95;           
        }

        strokeWeight(1);
        stroke(50);
        fill(255);
        rect(this.x - this.width/2,this.y - this.height/2,this.width,this.height,10);

        fill(10);
        strokeWeight(0);
        textAlign(CENTER,CENTER);

        textSize(12 * this.hoverScaler);
        text(this.text,
            this.x + this.textPaddingLeft - this.width/2,
            this.y + this.textPaddingUp - this.height/2, 
            this.width - this.textPaddingLeft - this.textPaddingRight, 
            this.height - this.textPaddingUp - this.textPaddingDown);
    }

    update() {
        if (this.isActive) { 
            if (this.isClickable) {
                this.onPressDown = false;
                this.onPressUp   = false;

                if ((mouseX >= (this.x - this.width/2)) && (mouseX <= (this.x + this.width/2)) && (mouseY >= (this.y - this.height/2)) && (mouseY <= (this.y + this.height/2))) {
                    this.mouseIsOver = true;
                }else{
                    this.mouseIsOver = false;
                }

                if (this.mouseIsPressedTrack != mouseIsPressed) {
                    this.mouseIsPressedTrack = mouseIsPressed;

                    if (this.mouseIsOver && mouseIsPressed) {
                        this.overPressed = true;
                    }else{
                        this.overPressed = false;                        
                    }
                }

                if (this.mouseIsOver && this.overPressed) {
                    if (!this.isPressed) {this.onPressDown = true; this.onPressed();}
                    this.isPressed = true;
                }else if (!mouseIsPressed) {
                    if (this.isPressed) {this.onPressUp = true; this.onUnpressed();}
                    this.isPressed = false;
                }

                if (this.isPressed) {
                    this.pressed();
                }

                if (this.mouseIsOver) {
                    this.hoverScaler += (this.hoverScale - this.hoverScaler) * 0.5;      
                }else{
                    this.hoverScaler += (1 - this.hoverScaler) * 0.5;                
                }

                this.width   = lerp(this.width, this.standardWidth * this.hoverScaler,0.15);
                this.height  = lerp(this.height, this.standardHeight * this.hoverScaler,0.15);   
            }

            this.render();
        }
    }

    onPressed() {

    }

    onUnpressed() {

    }

    pressed() {

    }
    
    moveTo(x, y, speed) {
        this.isMoving   = true;  
        this.speed      = speed;
        this.targetX    = x;
        this.targetY    = y;    
    }

    move(x, y, speed) {
        var dist = distance(x,y,this.x,this.y);

        if (dist > 0.05) {      
            this.x += -(this.x - x) * speed;
            this.y += -(this.y - y) * speed;
        }else {
            this.x = x;
            this.y = y;

            this.isMoving = false;
            this.speed = 0;     
        }
    }

    delete () {
        let i = getClickableID(this);
        if (i > -1) {
            clickables.splice(i,1);
        }
    }
}
