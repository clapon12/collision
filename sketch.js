var fixedRect, movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  gameobject1 = createSprite(100,100,80,30);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(200,100,80,30);
  gameobject2.shapeColor = "green";
  gameobject3 = createSprite(300,100,80,30);
  gameobject3.shapeColor = "green";
  gameobject4 = createSprite(400,100,80,30);
  gameobject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){

    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{

    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";

  }


 
  drawSprites();
}
function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y -object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  
  return false;

}

}
