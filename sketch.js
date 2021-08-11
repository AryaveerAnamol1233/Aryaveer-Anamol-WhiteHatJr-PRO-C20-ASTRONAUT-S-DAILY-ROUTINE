var bg,sleep,back;
var brush;
var gym;
var eat;
var drink,bath;
var move,astro;

function preload(){
  bg=loadImage("iss.png");
  brush=loadAnimation("brush.png");
  sleep=loadAnimation("sleep.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png","move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);

  back = createSprite(0,0,800,400);
  back.addImage(bg);
 back.scale=0.5;

astro=createSprite(300,230);
astro.addAnimation("sleeping",sleep);
astro.scale=0.1
}


function draw() {
  background(255,255,255);  
  drawSprites();

if (keyDown(UP_ARROW)){
astro.addAnimation("bro",brush);;
astro.changeAnimation("bro",brush);
astro.y=350;
astro.velocityX=0;
astro.velocityY=0;
}

if (keyDown(DOWN_ARROW)){
  astro.addAnimation("DODO",gym);
  astro.changeAnimation("DODO",gym)
  astro.y=350;
  astro.velocityX=0;
  astro.velocityY=0;
  }

  if (keyDown(LEFT_ARROW)){
    astro.addAnimation("alt",eat);
    astro.changeAnimation("alt",eat)
    astro.y=350;
    astro.velocityX=0;
    astro.velocityY=0;
    }

    if (keyDown(RIGHT_ARROW)){
      astro.addAnimation("b",bath);
      astro.changeAnimation("b",bath)
      astro.y=350;
      astro.velocityX=0;
      astro.velocityY=0;
      }

      if (keyDown("M")){
        astro.addAnimation("m",move);
        astro.changeAnimation("m",move)
        astro.y=350;
        astro.velocityX=0;
        astro.velocityY=0;
        }


        drawSprites();
}