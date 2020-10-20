let x = [];
let y = [];
let z = [];
let bg;
let number = 60;

let distance = 200;
let cameraZ = 5;

function preload() {
  image = loadImage('data/text01.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  bgbox = createGraphics(windowWidth, windowHeight);
  bgdonut = createGraphics(windowWidth, windowHeight);
  bgbox.background(0, 0, 19, 100);
  background(200);
  angleMode(DEGREES);

  for (let i = 0; i < number; i = i + 1) {
    x[i] = random(-width / 2, width / 2);
    y[i] = random(-height / 2, width / 2);
    z[i] = random(-500, 500);

    let n = floor(random(10));
    let h = map(n, 0, 4, 250, 360);
  }
}

function draw() {
  bgbox.background(0, 0, 19);
  bgbox.noStroke();
  bgbox.fill(255);
  

  orbitControl();
  
  ambientLight(255);
 
  directionalLight(0,0,0,0,0,-1);
  for(let i=0;i<number;i=i+1){
    
  push();
  translate(x[i], y[i], z[i]/3);
  box(50);
  pop();
  
  push();
  z[i]=z[i]-5;
    if(z[i]<-300){
      z[i]=500;
      pop();
      texture(image);
      
     
    }
  }




  //camera(width/2,height/2,comeraPos);
}
