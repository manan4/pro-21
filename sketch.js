var bullet,wall,thikness;
var speed,weight,damage;

function setup() {
  createCanvas(1200,400);
  speed=random(100,150);
  weight=random(30,52);
  thikness=random(22,83);
  bullet = createSprite(60, 200, 50, 5);
  wall = createSprite(1000, 200, thikness, height/2);
  
}

function draw() {
  background("lightblue"); 
  bullet. velocityX = speed;
  
  if( hasCollided(bullet,wall)){

   bullet. velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thikness*thikness*thikness);

    if(damage <10){
     wall.shapeColor = ("red");
    }

    if(damage>10){
      wall.shapeColor = ("green");
    }
  }
  
  drawSprites();
}


function hasCollided(bullet,wall)
{bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
   return false;
}




