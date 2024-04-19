function setup() {
  createCanvas(400, 400, WEBGL)
  angleMode(DEGREES)
}

function draw() {
  background(30)

  noFill()
  stroke(255)

  let x = sin(frameCount * 2) * 90
  let y = cos(frameCount) * 90
  let z = sin(frameCount * 4) * 90

  translate(x, y, z)

  rotateX(frameCount)
  rotateY(frameCount / 2)
  rotateZ(frameCount / 4)

  for (let i = 0; i < 360; i++) {
    push()

    let r = map(sin(i + frameCount), -1, 1, 200, 50)
    let g = map(sin(i + frameCount / 3), -1, 1, 50, 200)
    let b = map(cos(i + frameCount / 7), -1, 1, 50, 200)

    stroke(r, g, b)

    rotateY(i / 2)

    ellipse(0, 0, 200)

    pop()
  }
}
