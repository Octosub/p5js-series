function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  const r = sin(frameCount) * 100 + 100
  const g = cos(frameCount) * 300 + 100
  const b = tan(frameCount) * 200 + 100
  background(b,r,g);
  strokeWeight(1)

  for(i=0; i<360; i+=6){
    stroke(r,g,b)
    let xCordinate = 200 * cos(frameCount + i) * (i*cos(PI)) + 200
    let yCordinate = 200 * sin(frameCount + i) * (i*sin(PI)) + 200 
    line(200, 200, xCordinate, yCordinate)   
  }
  stroke(r,g,b,3)
  for(i=1;i<470;i+=1){
    strokeWeight(sin(frameCount) * i) 
    line(0,200,400,200)
  }
}
