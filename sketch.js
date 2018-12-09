function setup() {
  createCanvas(1000, 1000);
  background(0);
  
}

function draw() {

    Beam();  //Beam function set
}

function Beam() {

  //Thanks to Mat for a lot of the code below. It was a jumping off point for 
  //experimentation with this project. 
 //x,y starting positions set using PI, cos, and sin
  var angle1 = random(5, 10 * PI);
  var xpos1 = 300 + 90 * cos(angle1);
  var ypos1 = 100 + 40 * sin(angle1);


  var angle2 = random(5, 1 * PI); //x,y destination points set
  var xpos2 = 200 + 90 * cos(angle2);   
  var ypos2 = 200 + 40 * sin(angle2);

//randomized color
  r = random(255);
  b = random(255);
  g = random(255);

 var opacity_light = random(15,55);
   stroke(r, b, g, opacity_light); 

var stroke_light = random(0.05,1);
   
strokeWeight (stroke_light);  
	fill(r,g,b) //slightly transparent colored ellipses, base of "beam"

  ellipse(xpos1-100, ypos1+700, xpos2/300, ypos2/300);
  
  ellipse(xpos1+200, ypos1+700, xpos2/300, ypos2/300);
  
  ellipse(xpos1+500, ypos1+700, xpos2/300, ypos2/300); 
  
//"Beam" lines
  
  line(xpos1-100, ypos1+700, xpos2-100, ypos2-250);
  
  line(xpos1+200, ypos1+700, xpos2+200, ypos2-250);
  
	line(xpos1+500, ypos1+700, xpos2+500, ypos2-250);
  
 
}