//This is a clickable class. It's basically the base for every object in our game

let clickables = [];

function getClickableID(clickable) {
    let index = -1;

    for (let i = 0; i < clickables.length; i++) {
        if (clickables[i] == clickable) {
            index = i;
        }
    }

    return index;
}

class Clickable {

    constructor(x = 0, y = 0, width = 50, height = 25, anchor = anchorTypes.TOPLEFT) {
        clickables.push(this);

        this.width  = width;
        this.height = height;
        this.x      = x;
        this.y      = y;

        this.anchor     = anchor;
        this.anchorX    = 0.5;
        this.anchorY    = 0.5;

        this.drawFrame  = true;
        this.textSize   = 12;

        // Can you even click the button?
        this.isClickable            = true;
        // true -> only trigger onPressed if it was unpressed while the cursor was on the button. false -> will always unpress regardless of the cursor's position
        this.onlyUnpressOverButton  = false;
        // only render and update if its active
        this.isActive               = true;

        this.hoverScale     = 1.25;
        this.hoverScaler    = 1;

        this.standardWidth  = this.width;
        this.standardHeight = this.height;

        this.speed   = 0;
        this.targetX = 0;
        this.targetY = 0;

        this.textPaddingUp      = 2;
        this.textPaddingDown    = 2;
        this.textPaddingLeft    = 2;
        this.textPaddingRight   = 2;

        this.isPressed      = false;
        this.onPressDown    = false;
        this.onPressUp      = false;
        this.mouseIsOver    = false;
        this.isMoving       = false;
        this.overPressed    = false;
        this.offPressed     = false;
        this.wasHovering    = false;

        this.mouseIsPressedTrack = mouseIsPressed;

        this.text = '';
    }

    render(ax, ay) {
        if (!this.isPressed) {

        } else {
            this.hoverScaler = this.hoverScale * 0.95;
        }

        if (this.drawFrame) {
            strokeWeight(1);
            stroke(50);
            fill(255);
            rect(ax - this.width * this.anchorX, ay - this.height * this.anchorY, this.width, this.height, 10);
        }

        fill(10);
        strokeWeight(0);
        textAlign(CENTER, CENTER);
        textSize(this.textSize * this.hoverScaler);
        text(this.text,
            ax + this.textPaddingLeft - this.width  * this.anchorX,
            ay + this.textPaddingUp   - this.height * this.anchorY,
            this.width  - this.textPaddingLeft - this.textPaddingRight,
            this.height - this.textPaddingUp   - this.textPaddingDown);
    }

    update() {
        if (this.isActive) {
            let ax = 0;
            let ay = 0;
    
            switch (this.anchor) {
                case anchorTypes.TOPLEFT:
                    ax = this.x;
                    ay = this.y;
                    break;
                case anchorTypes.LEFT:
                    ax = this.x;
                    ay = this.y + height/2;
                    break;    
                case anchorTypes.BOTTOMLEFT:
                    ax = this.x;
                    ay = this.y + height;
                    break;      
                case anchorTypes.TOP:
                    ax = this.x + width/2;
                    ay = this.y;
                    break;
                case anchorTypes.CENTER:
                    ax = this.x + width/2;
                    ay = this.y + height/2;
                    break;    
                case anchorTypes.BOTTOM:
                    ax = this.x + width/2;
                    ay = this.y + height;
                    break;      
                case anchorTypes.TOPRIGHT:
                    ax = this.x + width;
                    ay = this.y;
                    break;
                case anchorTypes.RIGHT:
                    ax = this.x + width;
                    ay = this.y + height/2;
                    break;    
                case anchorTypes.BOTTOMRIGHT:
                    ax = this.x + width;
                    ay = this.y + height;
                    break;    
            }
            
            if (this.isClickable) {
                this.onPressDown = false;
                this.onPressUp = false;

                if ((mouseX >= (ax - this.width * this.anchorX)) && (mouseX <= (ax + this.width * (1-this.anchorX))) && (mouseY >= (ay - this.height * this.anchorY)) && (mouseY <= (ay + this.height * (1-this.anchorY)))) {
                    this.mouseIsOver = true;
                    cursor(HAND);
                } else {
                    this.mouseIsOver = false;
                }

                if (this.mouseIsPressedTrack != mouseIsPressed) {
                    this.mouseIsPressedTrack = mouseIsPressed;

                    if (this.mouseIsOver && mouseIsPressed) {
                        this.overPressed = true;
                    } else {
                        this.overPressed = false;
                    }

                    if (!this.mouseIsOver && !mouseIsPressed) {
                        this.offPressed = true;
                    } else {
                        this.offPressed = false;
                    }
                }

                if (this.mouseIsOver && this.overPressed) {
                    if (!this.isPressed) { this.onPressDown = true; this.onPressed(); }
                    this.isPressed = true;
                } else {
                    if (this.onlyUnpressOverButton) {
                        if (!this.offPressed && this.mouseIsOver) {
                            if (this.isPressed) { this.onPressUp = true; this.onUnpressed(); }
                            this.isPressed = false;
                        } else {
                            this.isPressed = false;
                        }
                    } else {
                        if (!this.overPressed) {
                            if (this.isPressed) { this.onPressUp = true; this.onUnpressed(); }
                            this.isPressed = false;
                        }
                    }
                }

                if (this.isPressed) {
                    this.pressed();
                }

                if (this.mouseIsOver) {
                    this.hoverScaler += (this.hoverScale - this.hoverScaler) * 0.5;
                } else {
                    this.hoverScaler += (1 - this.hoverScaler) * 0.5;
                }

                if (this.wasHovering != this.mouseIsOver) {
                    if (this.mouseIsOver) {
                        this.onHovered();
                    }else{
                        this.onStopHovered();
                    }

                    this.wasHovering = this.mouseIsOver;
                }

                this.width = lerp(this.width, this.standardWidth * this.hoverScaler, 0.25);
                this.height = lerp(this.height, this.standardHeight * this.hoverScaler, 0.25);
            }

            if (this.isMoving) {
                this.move(this.targetX, this.targetY, this.speed);
            }

            this.render(ax,ay);
        }
    }

    onPressed() {
        return;
    }

    onUnpressed() {
        return;
    }

    pressed() {
        return;
    }

    onHovered() {
        //responsiveVoice.speak(this.text,"Dutch Female",{pitch: 0.25});
        return;
    }

    onStopHovered() {
        return;
    }

    moveTo(x, y, speed) {
        this.isMoving   = true;
        this.speed      = speed;
        this.targetX    = x;
        this.targetY    = y;
    }

    move(x, y, speed) {
        let distance = dist(x, y, this.x, this.y);

        if (distance > 0.05) {
            this.x += -(this.x - x) * speed;
            this.y += -(this.y - y) * speed;
        } else {
            this.x = x;
            this.y = y;

            this.isMoving = false;
            this.speed = 0;
        }
    }

    delete() {
        let i = getClickableID(this);

        if (i > -1) {
            delete clickables[i];
            clickables.splice(i, 1);
        }
    }
}

