var f1, f2
var background, backgroundimg

var backgroundimg
var firefighter
var firefighterimg
var fire1
var fire1img
var score=0
var fireGroup
var gameState=START
var screen = 0
var PLAY = 1
var END = 0
var START = 2
var fireAudio
function preload() {
backgroundimg=loadImage("background.jpg")
firefighterimg = loadImage("firefighter.png")
fire1img = loadImage("fireimage2.png")
fireAudio = loadSound("fireSound.mp3")
}

function setup() {
  var can = createCanvas(windowWidth,windowHeight); 
  can.mousePressed(mp)
  firefighter=createSprite(windowWidth/10-120,windowHeight-105,100,200);
  firefighter.addImage("firefighter image", firefighterimg)
  firefighter.scale = 0.2
  fireGroup=new Group();
  drawSprites()
}

function draw() {
  if(screen == 0) {
    startScreen();
  }
  else if(screen == 1) {
    gameScreen()
    drawSprites()
  }  
  else if(screen == 2) {
    endScreen()
  }
  if(gameState === PLAY) {
    firefighter.x = mouseX
    firefighter.y = mouseY
  if(firefighter.isTouching(fireGroup)) {
      fireGroup.get(0).destroy()
      score = score+1
  }
  }

}
  


function startScreen() {
  background("Cyan")
  textSize(30)
  fill("black")
  text("click on the SCREEN to know the rules ",width/2,height/1.5+20);  
  gameState = PLAY
  reset();
}
function gameScreen() {
  if(gameState===PLAY) {
    background(backgroundimg)
    textSize(25)
    fill("cyan")
    text("Score:"+score,windowWidth-100,windowHeight-50)
    spawnFire()
    /*if(keyDown("right_arrow")) {
      //prepos = position
      //position = "right"
      firefighter.x = firefighter.x+10
      }
    if(keyDown("left_arrow")) {
      firefighter.x = firefighter.x-10
    }
    if(keyDown("up_arrow")) {
      firefighter.y = firefighter.y-10
    }
    if(keyDown("down_arrow")) {
      firefighter. y = firefighter.y+10
    }
    if(firefighter.isTouching(fireGroup)) {
      fireGroup.get(0).destroy()
      }*/

}
}

function endScreen() {
background("red")
textSize(30)
fill("black")
textAlign(CENTER)
text("Game Over! Next time, try not to touch the fires.", windowWidth/2, windowHeight/2)
}






function spawnFire() {
  if(frameCount % 100 === 0) {
    fire1 = createSprite(windowWidth,windowHeight)
    fire1.y = Math.round(random(windowHeight-600,windowHeight-400))
    fire1.x = Math.round(random(windowWidth-900,windowWidth-10))
    fire1.addImage("fireimage",fire1img)
    fireGroup.add(fire1)
    fire1.depth=firefighter.depth
    firefighter.depth+=1
  }
}

function mp() {
if(screen == 0) {
  screen = 1
}
else if(screen == 2) {
  screen = 0
}
}

function reset() {
  score = 0
}