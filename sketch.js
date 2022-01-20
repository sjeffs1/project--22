var road,escapist;
var police1;

var policeCG, escapistCG;

var roadImg,escapistImg;

var gameOverImg;

var END = 0;
var PLAY = 1;
var gameState = PLAY;

var distance=0;
var gameOver;

function preload(){
  road = loadImage("road.png");
  escapist = loadImage("spr_bike_0.png");
  police1 = loadImage("car.png")
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
createCanvas(1200,300);

road = createSprite(600,150, 1200, 300);
road.addImage(roadImg);
road.velocityX = -5;

escapist  = createSprite(70,150);
escapist.changeImage(escapistImg);
escapist.scale=0.7;
escapist.setCollider("rectangle",0,0,40,40);

gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.08;
gameOver.visible = false; 

policeCG = 
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   escapist.y = World.mouseY;
  
   edges= createEdgeSprites();
   escapist.collide(edges);
  
  if(road.x < 0 ){
    road.x = width/2;
  }
    
   var policeCreator = Math.round(random(1, 1));
  
  if (frameCount % 150 == 0) {
    if (policeCreator == 1) {
      police();
  }
  
   if(police1.isTouching(escapist)){
     gameState = END;
     police1.velocityY = 0;
     police1.addImage(police1);
    }
    
}
}else if (gameState === END) {
    gameOver.visible = true;
  
    path.velocityX = 0;
    escapist.velocityY = 0;
    escapistCG.addImage(escapist);

    police1.setVelocityXEach(0);
    police1.setLifetimeEach(-1);

    if(keyDown("UP_ARROW")) {
        reset();
      }
}
}

function police(){
  if(frameCount % 60 === 0)
        police1 = createSprite(1100,Math.round(random(50, 250)));
        police1.scale =0.06;
        police1.velocityX = -(6 + 2*distance/150);
        police1.addImage(policeImg)
        police1.setLifetime=170;
        policeCG.add(police1);
}

function reset(){
 gameState = PLAY;
 gameOver.visible = false;
 escapist.addImage(escapist);
  
 policeCG.destroyEach();

 distance = 0;
}