let particles = []


function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
}

function draw() {
  background(30)

  for(let i = 0; i < 20; i++) {
    p = new Particle()
    particles.push(p)
  }

  for(let i = 0; i < particles.length; i++) {
    if (particles[i].alpha > 0) {
      particles[i].update()
      particles[i].show()
    } else {
      particles.splice(i, 1)
    }
  }
}
