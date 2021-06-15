var bg,bg2,form,system,code,security;
var score=0,next;

function preload() {
  bg = loadImage("j.jpg");
  bg2 = loadImage("p.jpg");
  nextImage = loadImage("k.png");
  click=loadSound("p.mp3");
  loki=loadSound("o.mp3");
}

function setup() {
  createCanvas(1000,500);
   system = new System()
  security = new Security()

  next = createSprite(500,460,2,2)
  next.scale=0.9;
}

function draw() {
  background(bg);
  clues();
  security.display();
 
  // Add code to display score in the middle of the screen

textSize(30);
fill("red");
text ("SCORE:" + score,30,470)

textSize(30);
fill("black");
text ("Save Loki",450,50)

textSize(10);
fill("black");
text ("*There should be no spaces between codes",700,450)

textSize(10);
fill("black");
text ("*There should be no spelling mistake",700,430);

textSize(10);
fill("black");
text ("*Free loki and watch loki streaming on stream service",700,470);

  // Add code to display the end screen
  if(score===4){
    clear()
    background(bg2)
    next.addImage(nextImage);
   
  }

  drawSprites()
 
}