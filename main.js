function preload(){
clownnose = loadImage("https://i.postimg.cc/htjxTm2z/Clown-Nose-PNG-HD-Image.png");
}

function setup(){
   canvas = createCanvas (400,400);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(400,400);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
}

nosex = 0
nosey = 0

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 20;
        nosey = results[0].pose.nose.y - 20;
        console.log("nose position x = " + nosex);
        console.log("nose position y = " + nosey);
    }
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function draw(){
image(video, 0, 0, 400, 400);
image(clownnose, nosex, nosey, 50, 50);
}

function takesnapshot(){
    save("clown_nose.png");
}