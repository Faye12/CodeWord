let colors = "01295f-437f97-849324-ffb30f-fd151b-fff".split("-").map(a=>"#"+a)
let overAllTexture
function setup() {
  createCanvas(800,800);
  background(100);
  
  drawingContext.shadowColor = color(0,50);
  // drawingContext.shadowBlur =50
  // drawingContext.shadowOffsetY =10
  // drawingContext.shadowOffsetX =10
  
  fill('black')
  
  overAllTexture=createGraphics(width,height)
  
  overAllTexture.loadPixels()
  for(var i=0;i<width;i++){
    for(var o=0;o<height;o++){
      overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
    }
  }
  overAllTexture.updatePixels()
  rect(0,0,width,height)
}

function draw() {
  fill(0,0,20)
  noStroke()
  rect(0,0,width,height)
  // translate(0,height/2)
  if (mouseX==0 && mouseY==0){
    mouseX=width*0.8
    mouseY=height
  }
  push()
    rotate(PI/4)
    stroke(255)
    strokeWeight(3)

    for(var i=0;i<1200;i+=0.5){
      strokeWeight(cos(i/(40+mouseX/50)+frameCount/50)*100 +5)
      let clr = color(colors[ int(i/(mouseX/50+10))%colors.length])
      if (i%50<10){
        clr.setAlpha(100)
        // strokeWeight(5)
      }
      stroke(clr)
      let freq = 4+sin(frameCount/1000)/10+ mouseX/10000+0.1 + noise(i/500,frameCount/5000)*2
      let rr =  + sin(mouseY/300+i/250+frameCount/500)*450 
      // let rr =0 +100*noise(i/100+frameCount/50) 
      // let rr = 20

      let sang = i/freq+frameCount/10
      let eang = sang + 1/freq
      let sx = i-1+cos(sang)*rr/10
      let sy = sin(sang)*rr
      let ex = i+cos(eang)*rr/10
      let ey = sin(eang)*rr

      line(sx,sy,ex,ey)
    }
  
  pop()
  blendMode(BLEND)
  // blendMode(SCREEN)
  // translate(random(-1,1),random(-1,1))
  // copy(0,0,width,height,0,2+int(sin(frameCount)/10),width,height+1)
  
  // copy(0,0,width,height,-5,0,width-5,height-5)
  blendMode(BLEND)
  push()
    blendMode(MULTIPLY)
    image(overAllTexture,0,0)
  pop()
  
  // ellipse(mouseX, mouseY, 20, 20);
}
