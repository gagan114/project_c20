var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
  createCanvas(1600,800);
 
 
 car1=createSprite(50,100, 50, 50);
 wall1=createSprite(1200,100,60,100);

 car2=createSprite(50, 300, 50, 50);
 wall2=createSprite(1200,300,60,100);

 car3=createSprite(50, 500, 50, 50);
 wall3=createSprite(1200,500,60,100);

 car4=createSprite(50,700, 50, 50);
 wall4=createSprite(1200,700,60,100);

 speed=random(55,90);
 weight=random(400,1500);

 car1.velocityX=speed;
 car2.velocityX=speed;
 car3.velocityX=speed;
 car4.velocityX=speed;
}

function draw() {
  background("black"); 
  
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    car1.velocityX=0;
    
  
var deformation=0.5 * weight * speed * speed/22500;

if (deformation>180){
  car1.shapeColor = "red";
}

if (deformation<180 && deformation>100){
  car1.shapeColor = "yellow";
}

if (deformation<100){
  car1.shapeColor = "green";
}
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    car2.velocityX=0;
    
  
var deformation=0.5 * weight * speed * speed/22500;

if (deformation>180){
  car2.shapeColor = "blue";
}

if (deformation<180 && deformation>100){
  car2.shapeColor = "green";
}

if (deformation<100){
  car2.shapeColor = "silver";
}
  }


  if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    car3.velocityX=0;
    
  
var deformation=0.5 * weight * speed * speed/22500;

if (deformation>180){
  car3.shapeColor = "pink";
}

if (deformation<180 && deformation>100){
  car3.shapeColor = "white";
}

if (deformation<100){
  car3.shapeColor = "green";
}
  }

  if(wall4.x-car4.x < (car4.width+wall4.width)/2){
    car4.velocityX=0;
    
  
var deformation=0.5 * weight * speed * speed/22500;

if (deformation>180){
  car4.shapeColor = "purple";
}

if (deformation<180 && deformation>100){
  car4.shapeColor = "violet";
}

if (deformation<100){
  car4.shapeColor = "brown";
}
  }


  drawSprites();
}