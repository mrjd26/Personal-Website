var isRunning=true;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var arcs = [];
var firstView = true;
setTimeout(function(){firstView=false;},5000);


canvas.addEventListener('mouseenter', function(evt) {
  if (!firstView) {
   ctx.fillStyle="#FFFF00";
   ctx.font="30pt Verdana";
   ctx.fillText("Mike Jarvis's Portfolio",100,75);
  }
 });
canvas.addEventListener('mouseleave', function(evt) {
 ctx.fillStyle="#FFFFFF";
 ctx.fillText("Mike Jarvis's Portfolio",100,75);
});

var coords;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateCoord() {
  var x = getRandomInt(0,600);
  var y = getRandomInt(0,300);
  return [x,y]
 }


function render() {
  for ( i=0;i<arcs.length;i++) {
   var x = arcs[i][0];
   var y = arcs[i][1];
   var r = getRandomInt(0,150);
   ctx.beginPath();
   ctx.arc(x,y,r,0,2*Math.PI);
   ctx.stroke();
   ctx.fillStyle="#FFFFFF";
   ctx.font = "30pt Verdana";
   ctx.fillText("Mike Jarvis's Portfolio",100,75);
  }
}

function newArc() {
 coords = generateCoord();
 arcs.push(coords);
}
setInterval(newArc,300);

function run() {
 if (isRunning) {
  window.requestAnimationFrame(run);
  //update();
  render();
 } else {
  console.log("done");
  console.log(isRunning);
 }
}

//make a call to run
run();
function stop(){
 // stop after 20 seconds
 setTimeout(function(){isRunning=false;},5000);
}
stop();
canvas.addEventListener("click", function(){isRunning=true;arcs=[];ctx.clearRect(0,0,1000,300);run();stop();});
