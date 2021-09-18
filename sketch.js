var runner, road, obs
var runnerImg, roadImg, obsImg 

function preload(){
   runnerImg = loadAnimation("Images/running1.PNG","Images/running2.PNG","Images/running3.PNG","Images/running4.PNG","Images/running5.PNG","Images/running6.PNG","Images/running7.PNG","Images/running8.PNG")
   roadImg = loadImage("Images/bg img.jpg")
   obsImg = loadImage("Images/redbubble.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  
  road = createSprite(width/2 + 200,height/2,5000,600)
  road.addImage(roadImg)
  road.scale = 2.5
  road.velocityX = -2

  runner = createSprite(250,500)
  runner.addAnimation("running",runnerImg)

 


}
function draw(){
  if(road.x < 680 ){
    road.x = width/2 
  }
  console.log(road.x)
  drawSprites();
}