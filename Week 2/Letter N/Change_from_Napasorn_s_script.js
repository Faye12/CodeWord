function setup() {
createCanvas (500,500);
background(56,45,67);
angleMode(DEGREES);

}


function draw() {

 fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
 rect(150,150,200,200);
 fill(56,45,67);
 triangle(200,350,200,250,250,350);
 triangle(300,150,300,250,250,150);
 
 rect(mouseY,150,200,200);
 fill(mouseX,mouseY,0);
ellipse(mouseX,mouseX,mouseX,mouseY);
 
 
}

function keyPressed (){
  fill(34);
  rect(0,50,500,500);
}
