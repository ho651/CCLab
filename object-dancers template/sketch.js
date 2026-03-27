/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new DonutDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class DonutDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.bounce = 0;
    this.leftArmSwing = 0;
    this.rightArmSwing = 0;
    this.leftLegSwing = 0;
    this.rightLegSwing = 0;
  }
  update() {
    this.t = this.t + 0.08;
    this.bounce = sin(this.t * 2) * 5;
    this.leftArmSwing = sin(this.t) * 10;
    this.rightArmSwing = sin(this.t + 3.14) * 10;
    this.leftLegSwing = sin(this.t) * 6;
    this.rightLegSwing = sin(this.t + 3.14) * 6;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y + this.bounce);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    stroke(224, 161, 189);
    strokeWeight(8);

    // left arm
    line(-38, -5, -50 - this.leftArmSwing, -22);
    line(-50 - this.leftArmSwing, -22, -62 - this.leftArmSwing, -42);

    // right arm
    line(38, -5, 50 + this.rightArmSwing, -22);
    line(50 + this.rightArmSwing, -22, 62 + this.rightArmSwing, -42);

    // left leg
    line(-18, 38, -26 - this.leftLegSwing, 56);
    line(-26 - this.leftLegSwing, 56, -16 - this.leftLegSwing, 72);

    // right leg
    line(18, 38, 26 + this.rightLegSwing, 56);
    line(26 + this.rightLegSwing, 56, 16 + this.rightLegSwing, 72);

    noStroke();

    // donut body
    fill(226, 87, 153);
    let angle = 0;
    for (let i = 0; i < 18; i++) {
      let donutX = cos(angle) * 26;
      let donutY = sin(angle) * 26;
      ellipse(donutX, donutY, 28, 28);
      angle = angle + 0.35;
    }

    // sprinkles
    strokeWeight(3);

    stroke(random(255), random(255), random(255));
    line(-22, -26, -17, -21);

    stroke(random(255), random(255), random(255));
    line(20, -18, 25, -13);

    stroke(random(255), random(255), random(255));
    line(-8, 26, -3, 30);
    line(-30, 4, -24, 9);

    stroke(random(255), random(255), random(255));
    line(24, 10, 30, 15);
    line(-3, -34, 2, -29);

    stroke(random(255), random(255), random(255));
    line(11, 31, 16, 36);
    line(-32, -8, -26, -3);

    stroke(random(255), random(255), random(255));
    line(28, -4, 34, 1);
    line(-14, 36, -8, 41);

    stroke(random(255), random(255), random(255));
    line(4, -22, 9, -17);
    line(-36, 15, -30, 20);

    noStroke();

    // eyes white part
    fill(255);
    ellipse(-22, -6, 16, 22);
    ellipse(22, -6, 16, 22);

    // eyes black
    fill(0);
    ellipse(-22, -6, 10, 16);
    ellipse(22, -6, 10, 16);

    // mouth
    fill(0);
    arc(0, 16, 30, 25, 0, 3.14);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.


    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/