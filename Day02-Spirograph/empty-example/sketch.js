let r1
let r2

let a1 = 0
let a2 = 0

let a1Inc
let a2Inc

let prevX
let prevY

function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
  background(30)

  r1 = random(50, 100)
  r2 = random(50, 100)


  a1Inc = random(0.1, 5)
  a2Inc = random(0.1, 5)
}

function draw() {
  translate( width / 2, height / 2)
  stroke(255)

  for (let i = 0; i < 300; i ++) {
      let x1 = r1 * cos(a1)
      let y1 = r1 * sin(a1)

      let x2 = x1 + r2 * cos(a2)
      let y2 = y1 + r2 * sin(a2)

      let r = map(sin(frameCount), -1, 1, 180, 30)
      let g = map(cos(frameCount), -1, 1, 90, 60)
      let b = map(tan(frameCount), -1, 1, 45, 90)

      stroke(r, g, b)

      line(prevX, prevY, x2, y2)

      prevX = x2
      prevY = y2

      a1 += a1Inc
      a2 += a2Inc
  }
}
