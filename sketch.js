var a,logoimg ,button,b,bimg
var START = 0;
var PLAY = 1; 
var gameState = START;

 function preload () {
   logoimg=loadImage("Logo.png") 
   bimg = loadImage("i.jpg")
 }
function setup() {
  createCanvas(400,500); 
  a=createSprite(200, 300, 50, 50); 
  a.addImage("a1",logoimg)  
  a.scale = 1.5; 


  b=createSprite(200, 120, 50, 50); 
  b.addImage("b1",bimg)  
  b.scale = 0.35;

  button = createButton("Get Started :)"); 
  button.position (150,390); 
}

function draw() {   


  button.mousePressed (()=>{
    gameState = PLAY;
      })
if(gameState === START) { 
  background("#CB9BE2");   

  fill("black")
  textSize(20) 
  //textFont("Black Jack")
  text("Learn how to make new friends &",20,450) 
  text("Develop your personality",20,470)
}

 else if(gameState === PLAY) {
    background("#BEF0F4") 
    a.destroy();
    b.destroy();
   // button.destroy(); 
hide();
    text("What type of person are you?",50,50);
    text("Take this test to find out more about yourself",100,100)
  } 

  drawSprites(); 
 
}
function hide(){
  button.hide();
}