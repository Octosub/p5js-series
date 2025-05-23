class Point {
  constructor(posX, posY, bezierObj, birthFrame = frameCount) {
    this.posX       = posX
    this.posY       = posY
    this.birthFrame = birthFrame
    this.bezier     = {
      x1: bezierObj.x1,
      y1: bezierObj.y1,
      x2: bezierObj.x2,
      y2: bezierObj.y2,
      x3: bezierObj.x3,
      y3: bezierObj.y3,
      x4: bezierObj.x4,
      y4: bezierObj.y4,
    }
  }
}

let pointStore = []

function setup() {
  angleMode(DEGREES)
  createCanvas(400, 300);
  frameRate(30);
}

let hits = 0;

function draw() {
  noFill();  
  background(200);
  
  // Remove point from store after set frame time
  const pointLifeSpan = 23
  pointStore.forEach((pointInstance, index) => {
    if ((pointInstance.birthFrame + pointLifeSpan) < frameCount) {
      pointStore.splice(index, 1)
    }
    push();
    noStroke();
    bezier(
      pointInstance.bezier.x1,
      pointInstance.bezier.y1,
      pointInstance.bezier.x2,
      pointInstance.bezier.y2,
      pointInstance.bezier.x3,
      pointInstance.bezier.y3,
      pointInstance.bezier.x4,
      pointInstance.bezier.y4
    );
    pop();
    let t = map(sin(271 - (frameCount - pointInstance.birthFrame) * 7), -1, 1, 0, 1);
    console.log("val", sin(270 - (frameCount - pointInstance.birthFrame) * 0.1))
    console.log("t: ", t)
    let x = bezierPoint(
      pointInstance.bezier.x1,
      pointInstance.bezier.x2,
      pointInstance.bezier.x3,
      pointInstance.bezier.x4,
      t
    )

    let y = bezierPoint(
      pointInstance.bezier.y1,
      pointInstance.bezier.y2,
      pointInstance.bezier.y3,
      pointInstance.bezier.y4,
      t
    )
    fill(random, random, random);
    circle(x, y, 15)

    // Hit detection
    if (x > 350 && x < 400 && y > 100 && y < 120) {
      hits++;
    }

  })
  // Draw hit counter
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Hits: " + hits, 10, 20);


  // Draw basket
  stroke(0);
  line(350, 120, 400, 120);
}

function mousePressed() {
  // Bezier points for flight trajectory
  let bezierObj = {
    x1: mouseX,
    x2: mouseX + 130,
    x3: mouseX + 150,
    x4: mouseX + 200,
    y1: mouseY,
    y2: mouseY - 200,
    y3: mouseY - 180,
    y4: mouseY
  }
  if (pointStore.length == 0){
    pointStore.push(new Point(mouseX, mouseY, bezierObj));  
  }
}
