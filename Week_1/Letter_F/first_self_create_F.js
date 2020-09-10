function setup() {
createCanvas (500,500);

background (mouseX/2,mouseY/2,mouseX);

fill(55,89,145);
stroke(39,230,34);
strokeWeight(7);
rect(100,100,100,350);
}


function draw() {


strokeWeight(4);
stroke(9,35,124);
fill(23,10,250);
ellipse(300,150,180,100);

stroke(223,123,124);
strokeWeight(3);
fill(mouseX,mouseY,mouseX);
triangle(250,250,350,250,330,350);

strokeWeight(1);
stroke(mouseX+mouseY,mouseY/2,mouseX/2);
 line (mouseX,mouseY,200,100); 
 









  

}
