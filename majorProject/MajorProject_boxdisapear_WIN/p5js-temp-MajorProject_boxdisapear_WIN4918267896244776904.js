let x = [];
let y = [];
let z = [];

let distance = 200;
let cameraZ = 5;

let n = floor(random(10));
let h = map(n, 0, 4, 250, 360);

function preload() {
  image = loadImage('data/text01.jpg');
}

//boxparticle 

var s1 = function(sketch) {
  sketch.setup = function() {
  let canvasbox=sketch.createCanvas(windowWidth, windowHeight, sketch.WEBGL);
  canvasbox.position(0,0);
  
}

sketch.draw = function() {
  //for canvasbox
  sketch.background(220, 220, 225);
 
  sketch.orbitControl();
  sketch.ambientLight(255);
  sketch.directionalLight(0,0,0,0,0,-1);
  
   sketch.stroke(0.3);
  //for(let i=0;i<num;i=i+1){
    
   //x[i] = random(-width / 2, width / 2);
   //y[i] = random(-height / 2, width / 2);
   //z[i] = random(-500, 500);
    
  //sketch.push();
  //sketch.translate(x[i], y[i], z[i]/3);
  sketch.box(50);
  //sketch.pop();
  
  //z[i]=sketch.z[i]-5;
  //  if(sketch.z[i]<-300){
  //    sketch.z[i]=500;
  //    sketch.texture(image);
      
    }
  

  }


  //camera(width/2,height/2,comeraPos);
