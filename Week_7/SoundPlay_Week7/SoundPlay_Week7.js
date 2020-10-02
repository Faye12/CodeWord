let slider;
let value=255;
var song; 
var analyzer;
function preload(){
  song = loadSound ('data/lucky_dragons_-_power_melody.mp3');
}
function setup() {
 createCanvas (windowWidth,windowHeight);
 background(56,45,98);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(120);
  textAlign(CENTER,CENTER);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}


function draw() {
background(255);
 // fill(120);
  var volume = analyzer.getLevel();
  volume*=300;
  noStroke();
  let val = slider.value();
  background(val);
  
  let m=map(value,0,value,0,0);
 
  ellipse(width/2,height/2,volume,volume);
  fill(volume,m,m);
  
  translate(200,0);
  rect(width/2,height/2,volume,volume);
  rectMode(CENTER);
  fill(125,m,57);
  
  translate(-400,0);
  rect(width/2,height/2,volume,volume);
  rectMode(CENTER);
  fill(volume,76,257);
  //textSize(volume*2);
  //text('lucky dragon',width/2,height/2);
}
function mousePressed() {

  if (song.isPlaying()) {
    background(255);
    song.stop();
    song.noLoop();
  }
 
  else {
    background(255);
    song.loop();
    song.play();
}
}
