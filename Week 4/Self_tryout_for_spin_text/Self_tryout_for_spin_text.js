
var spin=0;
var angleRotation=0;
font = loadFont('data/ItaliaBookRegular.otf');

function setup() {
createCanvas(windowWidth,windowHeight);
background(0,67,90);
fill(56,90,23);
frameRate(12);
textAlign(CENTER);
angleMode(DEGREES);
}


function draw() {
  background(120,mouseX/2-20,mouseY+100,90);
  translate(mouseX,mouseY);
  rotate(angleRotation);
  textSize(40);
  text('Welcome to Codewords',width/mouseX,height/mouseY);
  angleRotation+=10;
  spin=spin-map(mouseX,0,height,-20,100);
  fill(85,100,255,90);
  
 // if (spin>=height){
  //  background(35,67,90);
  //  spin=0;
 // }


}
