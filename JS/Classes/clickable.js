function clickable (x, y, width, height) {

    this.width  = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.isPressed   = false;
    this.onPressDown = false;
    this.onPressUp   = false;
    this.mouseIsOver = false;

    this.displayText = '';

    this.render = function () {  
        if (!this.isPressed) {
            fill(220);
        }else{
            fill(110);
        }

        strokeWeight(1);
        stroke(50);
        rect(this.x,this.y,this.width,this.height,10);

        fill(10);
        strokeWeight(0);
        textAlign(CENTER,CENTER);
        text(this.displayText,this.x + this.width/2,this.y + this.height/2);
    }

    this.update = function () {
        this.onPressDown = false;
        this.onPressUp   = false;

        if ((mouseX >= this.x) && (mouseX <= (this.x + this.width)) && (mouseY >= this.y) && (mouseY <= (this.y + this.height))) {
            this.mouseIsOver = true;
        }else{
            this.mouseIsOver = false;
        }

        if (mouseIsPressed && this.mouseIsOver) {
            if (!this.isPressed) {this.onPressDown = true;}
            this.isPressed = true;
        }else{
            if (this.isPressed) {this.onPressUp = true;}
            this.isPressed = false;
        }

        this.render();
    }
}

