let maskImage;
let video;
let poseNet;
let pose;
let camx = 0; 
let camy = 0; // x and y positions of video


function preload() {
  video = createCapture(VIDEO);
  maskImage = loadImage("data/mask2-01.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses); // listen to new 'pose' events
  
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

function draw(){
  background(220);


  push();
  translate(video.width+width/2-(video.width/2), height/2-(video.height/2));
  scale (-1,1); // flip video & posenet
  video.mask(maskImage);
  image(video,camx-(video.width/2),camy,100,100);  // -320 to centre video
  
  
  if (pose) {
    camx = map(pose.nose.x,300,700,200,width); // map video x position to pose X position
    camy = map(pose.nose.y,200,400,0,height-400); // map video y position to nose Y position
  }
  

  
  pop(); // do not flip anything else
  

  
 
}
