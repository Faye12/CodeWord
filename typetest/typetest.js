function preload(){
font = loadFont('data/MyriadProRegular.otf'); 
font2 =loadFont('data/MyriadProBold.otf');
}

function setup() {
createCanvas(600,600);
background(220);
fill(0);
textAlign(CENTER);
}


function draw() {
  textSize(20);
  textFont(font2);
  text('SMALL',300,100);
  textFont(font,40);
  text('MEDIUM',300,200);
  textSize(60);
  textFont(font);
  text('BIG',300,500);
 

}
