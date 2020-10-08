let gl;
let poseNet;
let video;
let camx = 0; 
let camy = 0;

let num = 20;
let R = 170;
let r = 100;
let text=0;



let pg;
let pgSize = 400;

let objs = [];
let objNum = 30;
let lapse = 0;    // mouse timer

function preload() {
  font = loadFont('data/Acumin-BdPro.otf');
  bubble = loadImage('data/bubble_1.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES);

  pg = createGraphics(400, 400);
  pg.rectMode(CENTER);
 
  createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  gl = createGraphics(width/5,height/5,WEBGL);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
   pose = poses[0].pose; // if pose is found, take first pose property from poses array (not skeleton)
  }
}

function modelLoaded() {
  print('model loaded!');
}
  
function draw() {
  background(255);
  image(video,0,0);
 
 
  texture(bubble);
  pg.noStroke();


  lights();
  pointLight(color(255), 0, 0, 0);

  noStroke();
 

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
}

class Obj {
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

  move(targetPg) {
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

  //display(targetPg) {
    
     //targetPg.fill(255);
 

  //}
}

//function mousePressed(){
// prevents mouse press from registering twice
  //if (millis() - lapse > 400){
   // save('pix.jpg');
   // lapse = millis();
 // }
//}
