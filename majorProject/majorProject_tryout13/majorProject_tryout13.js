let num = 20;
let R = 170;
let r = 100;
let text=0;

let pg;
let pgSize = 400;

let objs = [];
let objNum = 30;
let lapse = 0;    // mouse timer

let x = []; // forground box
let y = []; //forground box
let z = []; //forground box

let number = 60; //forground box
let distance = 200; //forground box
let cameraZ = 5; //forground box

var song;

function preload() {
  bubble = loadImage('data/bubble-01.png');
  image = loadImage('data/text01.jpg');
  song = loadSound ('data/2CbJorgeMillian.mp3');
}

function loaded(){
song.loop();
song.play();
song.setVolume(0.5);
}


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES);
  song.play();

  pg = createGraphics(400, 400);
  pg.rectMode(CENTER);

  for (let i = 0; i < number; i = i + 1) { //forground box
    x[i] = random(-width / 2, width / 2);
    y[i] = random(-height / 2, width / 2);
    z[i] = random(-500, 500);

    let n = floor(random(10));
    let h = map(n, 0, 4, 250, 360);
  }
 
}

function draw() {
  background(255);
  //song.play();
  orbitControl();
  
  ambientLight(255);
  directionalLight(0,0,0,0,0,-1);
  
  for(let i=0;i<number;i=i+1){ //forground box
  push();
  translate(x[i], y[i], z[i]/3); 
  box(50);
  pop();
  
  z[i]=z[i]-5; //forground box
    if(z[i]<-300){
      z[i]=500;
      
      texture(image); //forground box texture
      push();
      
    }
  }

  let camX = map(mouseX,0,width,-200,200); // camera only control backgournd rotating text
  camera((mouseY-camX)/3,0,((height/2)/tan(PI/6))/(mouseX/8),camX,0,0,0,1,0); // camera only control backgournd rotating text
  ambientLight(255);
  
  push();
  texture(bubble); //background rotating text's texture
  pg.noStroke();
  noStroke();
  pop();
  
  for (let i = 0; i < num; i++) { //background rotating text
    push();
    translate(R*1.15 * cos(360 * i / num), R * sin(360 * i / num), 0);
    rotateX(i % 2 * 90);
    rotateY(i % 2 * (360 * i / num + 90) + frameCount * 2);
    rotateZ(360 * i / num + 90);
    ellipse(r/20, r*0.7,r,r);
    
    box(r*1.5);
    
    pop();
  
  }
}

class Obj { //background rotating text
  constructor() {
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

  move(targetPg) { //background rotating text
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

  display(targetPg) { //background rotating text
    
     targetPg.fill(255);
     getPg.rect(this.xB, this.yB, this.w, this.h, 50);

  }
}
//function mousePressed() {
//  if (song.isPlaying()) {
//    // .isPlaying() returns a boolean
//    song.stop();
    
//  } else {
//    song.play();
    
//  }
//}
