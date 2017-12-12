var button;

function setup() {  
  button = new clickable (50,50,50,50);
  button.displayText = 'button';

  console.log(button);
}

function draw() {
  button.update();
}