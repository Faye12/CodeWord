let angle = 0;
let faye=0;
let graphics=0;
let text=0;

function preload() {
  image = loadImage('data/Faye.jpg');
}
function setup() {
createCanvas(windowWidth,windowHeight,WEBGL);
graphics=createGraphics(200,200);
graphics.background(55,90,50);
 
text= createGraphics(200,200);
//text.background(5);
text.fill(255);
text.textAlign(CENTER);
text.textSize(80);
text.text('love',150,50);

}

function draw() {
background(175); 

graphics.fill(255,0,0);
graphics.ellipse(mouseX,mouseY,20);



let cameraX = map(mouseX,0,width,-200,200);
//let camX= random(-5,5);//earthquake
//let camY= random(-5,5);//earthquake
//let camZ= random(-5,5);//earthquake
//camera(camX, camY, camZ+(height/2) / tan(PI/6), camY, camZ, camX, 0, 1, 0);
camera(cameraX, 0, (height/2) / tan(PI/6), cameraX, 0, 0, 0, 1, 0);

//rectMode(CENTER);
noStroke();
//fill(0,0,255);
translate(mouseX/30,mouseY/30);
rotateX(angle);
rotateY(angle*0.3);
rotateZ(angle*1.2);
//rect(0,0,150,150);
//stroke(0);
//cylinder(100,200,100);

//push();
//normalMaterial();
//ambientMaterial(255);
ambientLight(255);
let dx= mouseX-width/2;
let dy= mouseY-height/2;
directionalLight(255,0,0,dx,dy,1);
//pointLight(0,0,255,-200,0,0);
//pointLight(255,0,0,0,200,0);
//torus(100,25);
box(200);
texture(text);

//pop();
//translate(0,100);
//rotateX(HALF_PI);
//plane(200,200);

angle += 0.07;
}
