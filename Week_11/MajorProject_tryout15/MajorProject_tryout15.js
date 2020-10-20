//MultiCanvas test by k.donnachie for codeWords 2020
//Magic Chain by Richard Bourne
//Spinning Box Color by Ryan Van Dyk
//Special thanks to Daniel Shiffman

let x = [];
let y = [];
let z = [];
let c = [];
let bg;
let number = 40;

let distance = 200;
let cameraZ = 5;

let num = 40;
let R = 170;
let r = 100;
let text=0;

let pg;
let pgSize = 400;

let objs = [];
let objNum = 40;
let lapse = 0;

var song;

function preload() {
  image = loadImage('data/text01.jpg');
  bubble = loadImage('data/bubble3.png');
  //font = loadFont('data/Acumin-BdPro.otf');
  song = loadSound ('data/2CbJorgeMillian.mp3');
}
function setup() {
  song.play();
  song.loop();
  createCanvas(windowWidth, windowHeight, WEBGL);

  bgbox = createGraphics(windowWidth, windowHeight);
  bgdonut = createGraphics(windowWidth, windowHeight);
  background(255, 255, 255);
  //bgbox.background(0, 0, 19);
  //bgdonut.background(0, 0, 19);
  angleMode(DEGREES);
  
  //pg = createGraphics(400, 400);
  //pg.rectMode(CENTER);
  //text= createGraphics(200,200);
  ////text.background(5);
  //text.fill(255);
  //textFont(font);
  //text.textAlign(LEFT);
  //text.textSize(10);
  //text.text('SPEECH CHAIN SPEECH CHAIN SPEECH CHAIN SPEECH CHAIN',100,80);

  for (let i = 0; i < number; i = i + 1) {
    x[i] = random(-width / 2, width / 2);
    y[i] = random(-height / 2, width / 2);
    z[i] = random(-500, 500);

    let n = floor(random(10));
    let h = map(n, 0, 4, 250, 360);
  }
}

function draw() {
  background(255);
  bgdonut.background(255, 255, 255,0);
  bgbox.background(255, 255, 255,0);
  noStroke();
  
 
  bgbox.fill(255);
  
  orbitControl();
  
  ambientLight(255,255,255);
  //ambientLight(random(0,120), (0,54), (0,173));
 
  directionalLight(0,0,0,0,0,-1);
  for(let i=0;i<number;i=i+1){
    
  push();
  translate(x[i], y[i], z[i]/3);
  c[i] = texture(image)  ;  
  
  box(100);
  

  pop();
  
  push();
  z[i]=z[i]-5;
    if(z[i]<-300){
      z[i]=500;
      texture(0);
      pop();
      }
    
  //bgdonut.background(255);
 
  push();
  let camX = map(mouseX,0,width,-200,200);
  camera((mouseY-camX)/3,0,((height/2)/tan(PI/6))/(mouseX/8),camX,0,0,0,1,0);
 
  push();
  ambientLight(255);
  pop();
  texture(bubble);
  bgdonut.noStroke(); 
  
  for (let i = 0; i < num; i++) {
    push();
    translate(R*1.15 * cos(360 * i / num), R * sin(360 * i / num), 0);
    rotateX(i % 2 * 90);
    rotateY(i % 2 * (360 * i / num + 90) + frameCount * 2);
    rotateZ(360 * i / num + 90);
    ellipse(r/20, r*0.7,r,r);
    
    box(r*1.5);
    pop();
    
  }
   
   for (var w=0; w<objs.length; w++){
   Objs[w].obj();
   Objs[w].move();
   Objs[w].display();
   pop();
    
   }
  }

class obj {
  constructor () {
    this.w = random(pgSize * 0.25, pgSize * 0.75);
    this.h = random(10, 30);

    this.xA = random(-this.w / 2, pgSize + this.w / 2);
    this.yA = random(this.h / 2, pgSize - this.h / 2);

    this.xB = -this.w / 2;
    this.yB = this.yA;

    this.flagA = true;
    this.flagB = false;

    this.speed = random(20, 50) * 0.25;
    
  }

  move() {
    if (this.flagA) {
      this.xA += this.speed;
    }
    if (this.flagB) {
      this.xB += this.speed;
    }

    if (this.xA > pgSize - this.w / 2) {
      this.flagB = true;
    }
    if (this.xB > pgSize - this.w / 2) {
      this.flagA = true;
    }

    if (this.xA > pgSize + this.w / 2) {
      this.xA = -this.w / 2;
      this.flagA = false;
    }
    if (this.xB > pgSize + this.w / 2) {
      this.xB = -this.w / 2;
      this.flagB = false;
    }
  }

  display() {
   
     fill(255);
      

  }
}

}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    
  } else {
    song.play();
  } 
 }
