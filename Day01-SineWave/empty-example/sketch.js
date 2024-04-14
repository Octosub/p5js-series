function setup() {
 // put setup code here
 createCanvas(400, 400, WEBGL);
 angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  background(30)



  rotateX(60)

  noFill()



  let rings = Math.floor(sin(frameCount) * 50)
  if (rings < 0) {
    rings = rings * -1
  }

  for (let i = 0; i < rings; i++) {

    let r = map(sin(frameCount / 2), -1, 1, 100, 200)
    let g = map(i, 0, 50, 100, 200)
    let b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r, g, b)

    rotate(frameCount / 500)

    beginShape()
      for (let j = 0; j < 360; j += 60) {
        let rad = i * 5
        //let x = rad * cos(radians(j))
        let x = rad * cos(j)
        let y = rad * sin(j)
        let z = sin(frameCount + i * 10) * 50

        vertex(x, y, z)
      }
    endShape(CLOSE)
  }

}
