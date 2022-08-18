var ob1img, ob2img, ob3img, ob4img, ob5img
var ob1, ob2, ob3, ob4, ob5
var player, playerimg
var estrada, estradaimg
var gamestate, pontos
pontos = 0


function preload(){

  estradaimg = loadImage("Rodovia.png")
  ob1img = loadImage("CONJ1.png")
}

function setup() {
  createCanvas(1080, 2340);
  estrada = createSprite(540, 1170, 100, 100)
  estrada.addImage(estradaimg);


  player = createSprite(540, 2200, 50, 50)

  ob1 = createSprite(350, 1170)
  ob1.addImage(ob1img)
  ob1.scale = 2
  ob1.velocityY = 5
}

function draw() {
  
  background(220);
  if (keyDown(49)){
    player.x = 100
  }
  if (keyDown(50)){
    player.x = 540
  }
  if (keyDown(51)){
    player.x = 980
  }
  drawSprites()
  textSize(200)
  fill(255, 255, 255)
  text(" "+ pontos, 440, 250);
  
}