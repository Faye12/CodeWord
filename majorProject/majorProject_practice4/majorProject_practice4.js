let Futura;
let angle = 0;

function preload() {
Futura = loadFont('data/Acumin-BdPro.otf');
 
}


function setup() {

 canvas = createCanvas(windowWidth, windowHeight, WEBGL) ;
 

let x1 =0;
let x2 =160;
let x3 = 320;
let x4 = 480;
let x5 = 640;
let x6 = 800;



g = createGraphics(950,500);
g.background(5,85,245);
g.fill(230);
//g.textAlign(CENTER);
g.textFont(Futura);
g.textSize(50);
g.text('SPEECH CHAIN',x1,100);
g.text('love',x2,100);
g.text('love',x3,100);
g.text('love',x4,100);
g.text('love',x5,100);
g.text('love',x6,100);

let a = 155;
g.text('love',x1,a);
g.text('love',x2,a);
g.text('love',x3,a);
g.text('love',x4,a);
g.text('love',x5,a);
g.text('love',x6,a);



let b = 205;
g.text('love',x1,b);
g.text('love',x2,b);
g.text('love',x3,b);
g.text('love',x4,b);
g.text('love',x5,b);
g.text('love',x6,b);



let c = 255;
g.text('love',x1,c);
g.text('love',x2,c);
g.text('love',x3,c);
g.text('love',x4,c);
g.text('love',x5,c);
g.text('love',x6,c);


let d = 305;
g.text('love',x1,d);
g.text('love',x2,d);
g.text('love',x3,d);
g.text('love',x4,d);
g.text('love',x5,d);
g.text('love',x6,d);

let e = 355;
g.text('love',x1,e);
g.text('love',x2,e);
g.text('love',x3,e);
g.text('love',x4,e);
g.text('love',x5,e);
g.text('love',x6,e);

let f = 405;
g.text('love',x1,f);
g.text('love',x2,f);
g.text('love',x3,f);
g.text('love',x4,f);
g.text('love',x5,f);
g.text('love',x6,f);


let h = 455;
g.text('love',x1,h);
g.text('love',x2,h);
g.text('love',x3,h);
g.text('love',x4,h);
g.text('love',x5,h);
g.text('love',x6,h);


}

function draw() {
 background(5,85,245);
  //ambientLight(200);
  rotateY(angle);
  //rotateY(-0.7);
//  g.position(100,0,0);

//rotateZ(-1.55);
rotateY(0);
//  rotateX(angle);

  texture(g);
  //fill(100,20);
  noStroke();
  cylinder(180,400,500,100);
  angle -= 0.02;

}
