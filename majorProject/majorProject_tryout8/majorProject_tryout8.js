let gl;
let video;
let poseNet;
let pose;
let camx = 0; 
let camy = 0; 
let song;

let num = 18;
let R = 200;
let r = 120;
let text=0;

let pg;
let pgSize = 400;

let objs = [];
let objNum = 30;
let lapse = 0;    // mouse time

function preload() {
 
  bubble = loadImage('data/speech-01.png');
  video = createCapture(VIDEO);
  song = loadSound ('data/SomebodysWatchingMe.mp3');
  
}
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses); // listen to new 'pose' events
  gl = createGraphics(windowWidth,windowHeight, WEBGL);
  
  pg = createGraphics(400, 400);
  pg.rectMode(CENTER);
  
 
 
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
 
  let camX = map(camx,0,camy,-300,300);
 
  camera(camX,0,((height/2)/tan(PI/6))/(mouseX/10),camX/8,camX/8,camX/8,0,1,0);
  ambientLight(255);
  
  push();
  translate(video.width+width/2-(video.width/2), height/2-(video.height/2));
  
  if (pose) {
    
    camx = map(pose.nose.x,300,700,200,width); // map video x position to pose X position
    camy = map(pose.nose.y,200,400,0,height-400); // map video y position to nose Y position
  }
  

  
  pop();
  texture(bubble);
  pg.noStroke();



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

  display(targetPg) {
    
     targetPg.fill(255);
 
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    
  } else {
    song.play();
    
  }
}
