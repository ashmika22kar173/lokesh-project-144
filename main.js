nosex = 0;
nosey = 0;


function preload() {
  clown_nose = loadImage('unnamed.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on('pose', gotposes);


}

function modelloaded() {
  console.log('poseNet is initialized');

}