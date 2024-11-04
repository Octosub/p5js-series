window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            angleX += 10;
            break;
        case 'ArrowDown':
            angleX -= 10;
            break;
        case 'ArrowLeft':
            angleY += 10;
            break;
        case 'ArrowRight':
            angleY -= 10;
            break;
    }
});

let angleX = 0;
let angleY = 0;

function setup() {
    createCanvas(800, 800, WEBGL);
    angleMode(DEGREES);

    
}

function draw() {

    
    background(20);

    strokeWeight(3);
    stroke('white');
    
    for(let i = 0; i < 10; i++) {
        angleX = sin(frameCount) * 30;
        angleY = cos(frameCount) * 30;
    }

    rotateX(angleY);
    //rotateY(angleY);

    line(-50, angleX - 50, -50, -50, angleY + 50, -50);
    line(-50, angleX + 50, -50, 50, angleY + 50, -50);
    line(-50, angleX - 50, -50, 50, angleY - 50, -50);
    line(50, angleX - 50, -50, 50, angleY + 50, -50);
    
    line(-50, angleX - 50, 50, -50, angleY + 50, 50);
    line(-50, angleX + 50, 50, 50, angleY + 50, 50);
    line(-50, angleX - 50, 50, 50, angleY - 50, 50);
    line(50, angleX - 50, 50, 50, angleY + 50, 50);
    
    line(-50, -50, -50, -50, -50, 50);
    line(-50, 50, -50, -50, 50, 50);
    line(50, -50, -50, 50, -50, 50);
    line(50, 50, -50, 50, 50, 50);

}