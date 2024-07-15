const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let shin;

function preload() {
  shin = loadImage("Shinsmile-BGwhite96.JPG");
}

function setup() {
  noCanvas();


  shin.loadPixels();
  for (let j = 0; j < shin.height; j++ ){
    let row = '';
    for (let i = 0; i < shin.width; i++){
      const pixelIndex = (i + j * shin.width) * 4;
      const r = shin.pixels[pixelIndex + 0];
      const g = shin.pixels[pixelIndex + 1];
      const b = shin.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len - 1));
      const c = density.charAt(charIndex);
      if (c == ' ') row += '&nbsp;'
      else row += c;
    }
    createDiv(row);
  }
}
