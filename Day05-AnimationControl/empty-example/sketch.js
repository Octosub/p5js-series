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


  rotateX(angleX)
  rotateY(angleY)
  rotateZ(angleZ)

  background(30);

  stroke('white')
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
