var robot, robotImg;
var dustbin, dustbinImg;
var emptyBin, emptyBinImg;
var emptyBin2;
var emptyBin3;
var emptyBin4;
var bg, bgImg;
var bg2, bg2Img;

function preload(){
robotImg = loadImage("robot.png")
dustbinImg = loadImage("bin.png")
emptyBinImg = loadImage("emptyBin.png")
bgImg = loadImage("parkImg.png")
bg2Img = loadImage("parkImg.png")
}

function setup(){
    createCanvas(1600,1000);

    bg = createSprite(2900,600,1600,1000);
    bg.addImage(bgImg);
    bg.scale=5.5
    bg.velocityX=5
    //bg.tint(0,153,204,26)

    bg2 = createSprite(0,600,1600,1000);
    bg2.addImage(bg2Img);
    bg2.scale=5.5
    bg2.velocityX=5

    robot = createSprite(800,500,50,100);
    robot.addImage(robotImg);
    robot.scale=0.3

    emptyBin = createSprite(60,60,50,50);
    emptyBin.addImage(emptyBinImg);
    emptyBin.scale=0.25

    emptyBin2 = createSprite(1540,940,50,50);
    emptyBin2.addImage(emptyBinImg);
    emptyBin2.scale=0.25

    emptyBin3 = createSprite(1540,60,50,50);
    emptyBin3.addImage(emptyBinImg);
    emptyBin3.scale=0.25

    emptyBin4 = createSprite(60,940,50,50);
    emptyBin4.addImage(emptyBinImg);
    emptyBin4.scale=0.25

}

function draw(){
    background(0);
   if(bg2.x>1300){
        bg2.x=0
    }

if(emptyBin.isTouching(robot)){
    emptyBin.addImage(dustbinImg);
    emptyBin.scale=0.5
    textSize(30);
    fill("yellow");
    text("press space to empty bin",100,100);
}

if(emptyBin2.isTouching(robot)){
    emptyBin2.addImage(dustbinImg);
    emptyBin2.scale=0.5
    textSize(30);
    fill("yellow");
    text("press space to empty bin",1150,900);
}

if(emptyBin3.isTouching(robot)){
    emptyBin3.addImage(dustbinImg);
    emptyBin3.scale=0.5
    textSize(30);
    fill("yellow");
    text("press space to empty bin",1150,100);
}

if(emptyBin4.isTouching(robot)){
    emptyBin4.addImage(dustbinImg);
    emptyBin4.scale=0.5
    textSize(30);
    fill("yellow");
    text("press space to empty bin",100,900);
}

if(keyWentDown("space")){
    emptyBin.addImage(emptyBinImg);
    emptyBin.scale=0.25

    emptyBin2.addImage(emptyBinImg);
    emptyBin2.scale=0.25

    emptyBin3.addImage(emptyBinImg);
    emptyBin3.scale=0.25

    emptyBin4.addImage(emptyBinImg);
    emptyBin4.scale=0.25
}

if(keyDown("down")){
    robot.y=robot.y+5
}

if(keyDown("up")){
    robot.y=robot.y-5
}

if(keyDown("right")){
    robot.x=robot.x+5
}

if(keyDown("left")){
    robot.x=robot.x-5
}

drawSprites();
}