
let graphics=0;

function preload() {
  font = loadFont('data/Acumin-BdPro.otf');
}
function setup() {
createCanvas(windowWidth,windowHeight,WEBGL);
graphics=createGraphics(200,200);
graphics.background(55,90,50);
noStroke();

text= createGraphics(200,200);
textFont(font);
text.fill(255);
text.textAlign(CENTER);
text.textSize(8);
text.text('speech chain',150,50);

}


function draw() {
  background(0);
  graphics.fill(255,0,0);
  
  let cameraX = map(mouseX/2,0,width/2,-300,300);
  let cameraY = map(mouseY/2,mouseX,height/2,-200,200);
  camera(0, 0, (height/2) / tan(PI/6), cameraX, 0, 0, 0, 1, 0);
  
  ambientLight(255);
  let dx= mouseX-width/2;
  let dy= mouseY-height/2;
  directionalLight(255,255,255,dx,dy,1);
  
  
  
 
  cylinder(180,50,500,100);
  translate(0,100);
  cylinder(180,50,500,100);
  texture(text);
  
}
