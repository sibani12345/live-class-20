var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100,100,80,50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2&&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2&&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2&&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}