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
  bubble = loadImage('data/bubble0.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES);

  pg = createGraphics(400, 400);
  //pg.colorMode(HSB, 360, 100, 100, 100);
  pg.rectMode(CENTER);
  //pg.drawingContext.shadowBlur = 80;

  //for (let i = 0; i < objNum; i++) {
   // objs.push(new Obj());
 // }
 text= createGraphics(200,200);
//text.background(5);
text.fill(0);
textFont(font);
text.textAlign(LEFT);
text.textSize(10);
text.text('SPEECH CHAIN SPEECH CHAIN SPEECH CHAIN SPEECH CHAIN',100,80);
 
 
}

function draw() {
  background(255);
  //translate(mouseY,mouseX/4-mouseY,mouseX/4);
  let camX = map(mouseX,0,width,-200,200);
  camera(mouseY-camX,0,((height/2)/tan(PI/6))/(mouseX/8),camX,0,0,0,1,0);
  ambientLight(255);
  //pg.clear();
  //pg.push();
 // pg.translate(pg.width/2, pg.height);
 // pg.rotate(radians(60));
 // pg.background(255);
 // pg.textAlign(CENTER);
  //pg.randomSeed(4);
  // for(let i = 0; i < 2; i++) {
  // let txtSize = 20;
 //  let x = (pg.random(pg.width)+frameCount)%(pg.width+txtSize)-pg.width/2;
  // let y = i * 40;
  //  pg.textSize(50);
  //  pg.text('codewords', -x, y);
  //}
 
  texture(bubble);

  //pg.blendMode(ADD);
  //pg.fill(0);
  pg.noStroke();


  lights();
  pointLight(color(255), 0, 0, 0);

  noStroke();
  //texture(pg);

  for (let i = 0; i < num; i++) {
    push();
    translate(R*1.15 * cos(360 * i / num), R * sin(360 * i / num), 0);
    rotateX(i % 2 * 90);
    rotateY(i % 2 * (360 * i / num + 90) + frameCount * 2);
    rotateZ(360 * i / num + 90);
    ellipse(r/20, r*0.7,r,r);
    //torus(r,r*15);
    //sphere(r);
    box(r*1.5);
    //cylinder(r,r*0.15);
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
    //this.hue = random(360);
    //this.sat = random(50, 100);
    //this.bri = random(30, 100);
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
    //targetPg.drawingContext.shadowColor = targetPg.color(this.hue, this.sat, this.bri);
     targetPg.fill(255);
 // targetPg.rect(this.xA, this.yA, this.w, this.h, 50);
   // targetPg.rect(this.xB, this.yB, this.w, this.h, 50);

  }
}

//function mousePressed(){
// prevents mouse press from registering twice
  //if (millis() - lapse > 400){
   // save('pix.jpg');
   // lapse = millis();
 // }
//}
