var runner, path

function preload(){
  //imagens pré-carregadas
  path = LoadIamge("path.png");
  runner = loadAnimation("runner-1.png","runner-2.png","runner-1.png","runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  runner=createSprite(200,200);
  runner.addAnimation("running",runner);
  runner.scale=0.25;
  runner.x = 50

  path=createSprite(400,300);
  leftboundary.invisible = true;
  
}

function draw() {
  background("white");
  
  path.velocityY = -2
  console.log(path.y)

  
  if(path.y > 400){
    path.y = height/2;
  }
  runner.x = World.mouseX;
  if(runner.x < 50){
  runner.x = 50
 }
  if(runner.x > 350){
   runner.x = 350
 }
  console.log(runner.x)
  runner.velocityX = runner.velocityX + 2;
  runner.colide(path);

  drawSprites();
}
//Não estou conseguindo rodar o código poderia me ajuda na próxima aula se tiver um tempinho?