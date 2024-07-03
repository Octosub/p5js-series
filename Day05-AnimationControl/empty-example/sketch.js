let angleX = 0;
let angleY = 0;
let angleZ = 0;

window.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      angleX += 5
      break;
    case 'ArrowDown':
      angleX -= 5
      break;
    case 'ArrowRight':
      angleZ += 5
      break;
    case 'ArrowLeft':
      angleZ -= 5
      break;
    case "default":
      break;
  }
})

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);

}

function draw() {

  let r = map(sin(frameCount / 2), -1, 1, 150, 100)
  let g = map(sin(frameCount / 2), -1, 1, 100, 300)
  let b = map(cos(frameCount), -1, 1, 100, 300)

  stroke(r, g, b)

  rotateX(angleX)
  rotateY(angleY)
  rotateZ(angleZ)

  background(30);

  //stroke('white')
  strokeWeight(3)

  line(-50, -50, -50, 50, -50, -50)
  line(-50, 50, -50, 50, 50, -50)
  line(-50, -50, -50, -50, 50, -50)
  line(50, -50, -50, 50, 50, -50)

  line(-50, -50, 50, 50, -50, 50)
  line(-50, 50, 50, 50, 50, 50)
  line(-50, -50, 50, -50, 50, 50)
  line(50, -50, 50, 50, 50, 50)

  line(-50, -50, -50, -50, -50, 50)
  line(50, 50, -50, 50, 50, 50)
  line(-50, 50, -50, -50, 50, 50)
  line(50, -50, -50, 50, -50, 50)
}
