
var player;
var score=0;
var wormGroup;

function preload(){
  frog = loadImage("images/frog.png")
  swam = loadImage("images/swampImg.png")
  wormImg = loadImage("images/worm.png")
}

function setup() {
createCanvas(600,600);
swam1 = createSprite(300,300)
swam1.addImage(swam)
swam1.scale = 2.5
player = createSprite(40,550,30,30); 
player.addImage(frog)
player.scale = 0.35

wormGroup= new Group();
}

function draw() {
background("black");  
stroke("red")
noFill();
ellipse(100,350,40,30);
player.x= mouseX;
player.y= mouseY;
generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(100,350,40,5);
  worm.addImage(wormImg)
  worm.scale = random(0.15,0.3)
  worm.x = random(100,500)
  worm.y = random(100,500)
  worm.shapeColor="green"
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
