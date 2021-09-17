//Matter JS.. 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

//Game variables
var gameState;
var Mterrain;
var cam;
var bodyOne;
var rover;
var bg;
var canvas2d;
var canvas3d;
var sprite;
var textFont1;
var roverPosition;
var captureframeCount;
var cameraPosition;

//Preload
function preload(){
  Mterrain = loadModel("terrain.obj", true);
  rover = loadImage("rover.gif");
  bg = loadImage("Ares.png");
  textFont1 = loadFont("textFont1.ttf")
}


function setup() {

  //MatterJS_SETUP
  engine = Engine.create();
  world = engine.world;
 
  //Initialiasing gamestate
  gameState = 0;

  //CreatingCanvas - WEBGL Mode
  canvas3d = createCanvas(displayWidth, displayHeight, WEBGL);
  
  //Cam
  cam = createCamera();
        
  //DebugModeON
  //debugMode(2100, 10,0 ,0, 0, 200, 0, 0, 0);

  //Initializing value of rover position
  roverPosition = 16;

  //Initializing value for counts in gamestate 1
  captureframeCount = 0;

}

function draw() {
  
  //Console.Log
   console.log("GameState : " + gameState);
   console.log("FrameCount: " + frameCount);
   console.log("CaptureframeCount: " + captureframeCount);
   
  //Setting background
    //BackgroundColour
    background("Black");

  //Dashboard Screen
  if(gameState === 0){
    push();
    texture(bg);
    noStroke();
    textSize(40);
    textFont(textFont1);
    text("Click anywhere to continue", displayWidth/2, displayHeight/2);
    plane(displayWidth, displayHeight);
    pop();
  }

  //Capturing counts when gamestate === 0 to reset camera and the rover
  if(gameState === 1 && frameCount%1.5 === 0){
    captureframeCount = captureframeCount + 1;
  }

  //Game Scene
  if(gameState === 1){
   //MatterJS
   //bodyOne.display();
   //bodyOne.clicked();

  //Initialising Game
    //Smooth
    smooth();

    //OrbitalControl
      //orbitControl(1,1,1);
  
    //Mterrain - Properties of terrain
      scale(6);
      translate(0,0,50);
      stroke(255);
      fill(255, 102, 94);
      model(Mterrain);

      //Mterrain2 - Properties of terrain2
      push();
      translate(0,0,190);
      stroke(255);
      fill(255, 102, 94);
      model(Mterrain);
      pop();

      //MarsRover      
      //Moving the rover - Changing the position
      push();
      if(frameCount%1.5 === 0){
        roverPosition = roverPosition + 0.4;
      }
      //Mars rover - GIF
      texture(rover);
      noStroke();
      translate(0, 0, roverPosition);
      plane(20, 16);
      pop();
  
      //Resetting rover position
      if(captureframeCount%600 === 0){
        roverPosition = -40;
      }
      
      //MatterJS - Creating body
      //bodyOne = new Sample(displayWidth/2-683, displayHeight/2-420, 160, 140);
  
      //Resetting camera position
      if(captureframeCount%600===0){
          cam.setPosition(0,0,300);
      }
  
      //Camera movement  
      cam.move(0, 0, 0.8);

  }
  
}

//MousePressed function - Change gameState
  function mousePressed(){
    console.log("Pressed")
    gameState = 1;
  }















//............Tested codes............///
  // perspective(PI / 2.0, width /height);
  //camX = map(mouseX, 0, width/10, -200, 200);
  //camera((Xpos) +30 , -height/8, 0);
  //camera((Xpos) +30 , -height/8, 0, width, height/6,0,0,1,0);
  // cam.move(delta, 0, 0);
  // if (frameCount % 10 === 0) {
  //   delta *= 2;
  // }
  // if (delta===2 || delta > 2.2) {
  //   delta =2;
  // }
  // perspective(PI / 2.0, width /height);
  //camX = map(mouseX, 0, width/10, -200, 200);
  //camera((Xpos) +30 , -height/8, 0);
  //camera((Xpos) +30 , -height/8, 0, width, height/6,0,0,1,0);
  //translate(0, 0, mouseX);
  //console.log(modelX);
  //box(85);
  //rotateY(90);
  //rotateZ(90);
  //rotate(180);
  //  if(frameCount%1===0){
  //    if(Xpos<0){
  //      Xpos+=6;
  //    }
  //    if(Xpos===0){
  //      Xpos= -600;
  //    }
  //  }, (height/2) / tan(PI/6),width/2, height/2, 100, 0,1,0
  //  if(Xpos>200){
  //    Xpos = -width/2;
  //  }
  // if(frameCount%1===0){
  //   Xpos=Xpos+10;
  // }
  //modelX(0,0,0);
  // cam.setPosition(sin(frameCount / 60) * 200, 0, 100);
  // perspective();
  // X = sliderGroup[0].value();
  // Y = sliderGroup[1].value();
  // Z = sliderGroup[2].value();
  // centerX = sliderGroup[3].value();
  // centerY = sliderGroup[4].value();
  // centerZ = sliderGroup[5].value();
  //camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  // for (var i = 0; i < 6; i++) {
  //   if (i === 2) {
  //     sliderGroup[i] = createSlider(10, 400, 200);
  //   } else {
  //     sliderGroup[i] = createSlider(-400, 400, 0);
  //   }
  //   h = map(i, 0, 6, 5, 85);
  //   sliderGroup[i].position(10, height + h);
  //   sliderGroup[i].style('width', '80px');
  // }
  //BG
  //image(bgImg, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  //BG_END
  //cam.setPosition(0,0,0);
