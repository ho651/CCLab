let scanned = [];
let chickens;
let egg;

let curChicken = 0;
let chickenX = 0;
let chickenY = 180;
let chickenDir = 1;

let eggX = 500;
let eggY = 300;

function preload() {
  for (let i = 1; i <= 4; i++) {
    scanned.push(loadImage("20260320114744-" + i + ".jpg"));
  }
}

function setup() {
  createCanvas(800, 500);

  eraseBg(scanned, 3);

  chickens = crop(scanned, 230, 20, 2600, 2900);

  egg = scanned[0].get(1600, 650, 500, 700);
}

function draw() {
  background(255);
  image(
    chickens[curChicken],
    chickenX,
    chickenY,
    chickens[0].width * 0.2,
    chickens[0].height * 0.2
  );

  if (frameCount % 10 == 0) {
    curChicken += chickenDir;

    if (curChicken >= chickens.length - 1) {
      chickenDir = -1;
    }

    if (curChicken <= 0) {
      chickenDir = 1;
    }
  }

  chickenX += 3;
  if (chickenX > width) {
    chickenX = -chickens[0].width * 0.25;
  }
  eggX = eggX + (mouseX - eggX) * 0.05;
  eggY = eggY + (mouseY - eggY) * 0.05;

  push();
  translate(eggX, eggY);
  rotate(sin(frameCount * 0.05) * 0.3);
  imageMode(CENTER);
  image(egg, 0, 0, egg.width * 0.22, egg.height * 0.22);
  pop();
}

function crop(imgs, x, y, w, h) {
  let cropped = [];
  for (let i = 0; i < imgs.length; i++) {
    cropped.push(imgs[i].get(x, y, w, h));
  }
  return cropped;
}

function eraseBg(imgs, threshold = 5) {
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.loadPixels();
    for (let j = 0; j < img.pixels.length; j += 4) {
      let d = 255 - img.pixels[j];
      d += 255 - img.pixels[j + 1];
      d += 255 - img.pixels[j + 2];
      if (d < threshold) {
        img.pixels[j + 3] = 0;
      }
    }
    img.updatePixels();
  }
}