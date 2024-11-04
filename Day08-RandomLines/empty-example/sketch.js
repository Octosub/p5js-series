function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  for(i=0; i<360; i+=6){
    let xCordinate = 200 * cos(frameCount + i) + 200
    let yCordinate = 200 * sin(frameCount + i) + 200 
    line(200, 200, xCordinate, yCordinate)   
  }
}
