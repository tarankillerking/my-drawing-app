function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    background("white");
    canvas.mouseReleased(drawing)
    synth=window.speechSynthesis
  }
function drawing(){
    doodlenet.classify(canvas,gotresult)
}  
  function preload(){
    doodlenet=ml5.imageClassifier('DoodleNet')
  }
function draw(){
  strokeWeight(13)
  stroke("blue")
  if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
}
function gotresult(error,results){
if(error) {
  console.log(error)
} else {
  console.log(results)
  document.getElementById("labelresult").innerHTML=results[0].label
  document.getElementById("labelconfidence").innerHTML=results[0].confidence
utterthis=new SpeechSynthesisUtterance(results[0].label)
synth.speak(utterthis)
}
}
function clearcanvas(){
  background("white");
}