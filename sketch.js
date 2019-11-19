var diam1 = 50;

function setup() {
  // put setup code here
    createCanvas(500, 400);
    background("#FF0000");
}

function draw() {
  // put drawing code here
}

function keyPressed(){
    if(keyCode===DOWN_ARROW){
        background("#FF0000"); 
    } else if(keyCode === UP_ARROW){
        background("#FFFF00");    
    } else if(keyCode === LEFT_ARROW){
        background("#0000FF"); 
    }else if(keyCode === RIGHT_ARROW){
        background("#00FF00"); 
    }     
}

function mousePressed(){
    ellipse(mouseX, mouseY, diam1, diam1);
    diam1 = random(50);    
}




