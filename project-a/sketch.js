/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let rectSize = 10;

// stars
let starX1, starX2, starX3, starX4, starX5;
let starX6, starX7, starX8, starX9, starX10;
let starX11, starX12, starX13, starX14, starX15;
let starX16, starX17, starX18, starX19, starX20;

let starY1, starY2, starY3, starY4, starY5;
let starY6, starY7, starY8, starY9, starY10;
let starY11, starY12, starY13, starY14, starY15;
let starY16, starY17, starY18, starY19, starY20;

let starS1, starS2, starS3, starS4, starS5;
let starS6, starS7, starS8, starS9, starS10;
let starS11, starS12, starS13, starS14, starS15;
let starS16, starS17, starS18, starS19, starS20;

let starP1, starP2, starP3, starP4, starP5;
let starP6, starP7, starP8, starP9, starP10;
let starP11, starP12, starP13, starP14, starP15;
let starP16, starP17, starP18, starP19, starP20;

let starB1, starB2, starB3, starB4, starB5;
let starB6, starB7, starB8, starB9, starB10;
let starB11, starB12, starB13, starB14, starB15;
let starB16, starB17, starB18, starB19, starB20;

// meteor
let meteorX, meteorY;
let meteorSpeedX, meteorSpeedY;
let meteorSize;
let meteorOn;

// fireflies
let homeX1, homeX2, homeX3, homeX4, homeX5, homeX6, homeX7, homeX8;
let homeY1, homeY2, homeY3, homeY4, homeY5, homeY6, homeY7, homeY8;

let wX1, wX2, wX3, wX4, wX5, wX6, wX7, wX8;
let wY1, wY2, wY3, wY4, wY5, wY6, wY7, wY8;

let p1, p2, p3, p4, p5, p6, p7, p8;
let s1, s2, s3, s4, s5, s6, s7, s8;
let wa1, wa2, wa3, wa4, wa5, wa6, wa7, wa8;
let rl1, rl2, rl3, rl4, rl5, rl6, rl7, rl8;
let a1, a2, a3, a4, a5, a6, a7, a8;
let c1, c2, c3, c4, c5, c6, c7, c8;

let state1, state2, state3, state4, state5, state6, state7, state8;
let scareStart1, scareStart2, scareStart3, scareStart4;
let scareStart5, scareStart6, scareStart7, scareStart8;

let flyMove;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");

    colorMode(HSB);
    noStroke();

    // stars
    starX1 = random(20, width - 20);
    starX2 = random(20, width - 20);
    starX3 = random(20, width - 20);
    starX4 = random(20, width - 20);
    starX5 = random(20, width - 20);
    starX6 = random(20, width - 20);
    starX7 = random(20, width - 20);
    starX8 = random(20, width - 20);
    starX9 = random(20, width - 20);
    starX10 = random(20, width - 20);
    starX11 = random(20, width - 20);
    starX12 = random(20, width - 20);
    starX13 = random(20, width - 20);
    starX14 = random(20, width - 20);
    starX15 = random(20, width - 20);
    starX16 = random(20, width - 20);
    starX17 = random(20, width - 20);
    starX18 = random(20, width - 20);
    starX19 = random(20, width - 20);
    starX20 = random(20, width - 20);

    starY1 = random(20, 220);
    starY2 = random(20, 220);
    starY3 = random(20, 220);
    starY4 = random(20, 220);
    starY5 = random(20, 220);
    starY6 = random(20, 220);
    starY7 = random(20, 220);
    starY8 = random(20, 220);
    starY9 = random(20, 220);
    starY10 = random(20, 220);
    starY11 = random(20, 220);
    starY12 = random(20, 220);
    starY13 = random(20, 220);
    starY14 = random(20, 220);
    starY15 = random(20, 220);
    starY16 = random(20, 220);
    starY17 = random(20, 220);
    starY18 = random(20, 220);
    starY19 = random(20, 220);
    starY20 = random(20, 220);

    starS1 = random(2, 5);
    starS2 = random(2, 5);
    starS3 = random(2, 5);
    starS4 = random(2, 5);
    starS5 = random(2, 5);
    starS6 = random(2, 5);
    starS7 = random(2, 5);
    starS8 = random(2, 5);
    starS9 = random(2, 5);
    starS10 = random(2, 5);
    starS11 = random(2, 5);
    starS12 = random(2, 5);
    starS13 = random(2, 5);
    starS14 = random(2, 5);
    starS15 = random(2, 5);
    starS16 = random(2, 5);
    starS17 = random(2, 5);
    starS18 = random(2, 5);
    starS19 = random(2, 5);
    starS20 = random(2, 5);

    starP1 = random(0, 100);
    starP2 = random(0, 100);
    starP3 = random(0, 100);
    starP4 = random(0, 100);
    starP5 = random(0, 100);
    starP6 = random(0, 100);
    starP7 = random(0, 100);
    starP8 = random(0, 100);
    starP9 = random(0, 100);
    starP10 = random(0, 100);
    starP11 = random(0, 100);
    starP12 = random(0, 100);
    starP13 = random(0, 100);
    starP14 = random(0, 100);
    starP15 = random(0, 100);
    starP16 = random(0, 100);
    starP17 = random(0, 100);
    starP18 = random(0, 100);
    starP19 = random(0, 100);
    starP20 = random(0, 100);

    // meteor
    meteorX = random(-200, -100);
    meteorY = random(30, 120);
    meteorSpeedX = random(6, 10);
    meteorSpeedY = random(2, 4);
    meteorSize = random(6, 10);
    meteorOn = 1;

    // firefly home positions
    homeX1 = 90;
    homeX2 = 180;
    homeX3 = 270;
    homeX4 = 360;
    homeX5 = 450;
    homeX6 = 540;
    homeX7 = 630;
    homeX8 = 720;

    homeY1 = random(390, 440);
    homeY2 = random(390, 440);
    homeY3 = random(390, 440);
    homeY4 = random(390, 440);
    homeY5 = random(390, 440);
    homeY6 = random(390, 440);
    homeY7 = random(390, 440);
    homeY8 = random(390, 440);

    wX1 = homeX1;
    wX2 = homeX2;
    wX3 = homeX3;
    wX4 = homeX4;
    wX5 = homeX5;
    wX6 = homeX6;
    wX7 = homeX7;
    wX8 = homeX8;

    wY1 = homeY1;
    wY2 = homeY2;
    wY3 = homeY3;
    wY4 = homeY4;
    wY5 = homeY5;
    wY6 = homeY6;
    wY7 = homeY7;
    wY8 = homeY8;

    p1 = random(0, 100);
    p2 = random(0, 100);
    p3 = random(0, 100);
    p4 = random(0, 100);
    p5 = random(0, 100);
    p6 = random(0, 100);
    p7 = random(0, 100);
    p8 = random(0, 100);

    s1 = random(0.03, 0.06);
    s2 = random(0.03, 0.06);
    s3 = random(0.03, 0.06);
    s4 = random(0.03, 0.06);
    s5 = random(0.03, 0.06);
    s6 = random(0.03, 0.06);
    s7 = random(0.03, 0.06);
    s8 = random(0.03, 0.06);

    wa1 = random(40, 90);
    wa2 = random(40, 90);
    wa3 = random(40, 90);
    wa4 = random(40, 90);
    wa5 = random(40, 90);
    wa6 = random(40, 90);
    wa7 = random(40, 90);
    wa8 = random(40, 90);

    rl1 = random(-1.4, 1.4);
    rl2 = random(-1.4, 1.4);
    rl3 = random(-1.4, 1.4);
    rl4 = random(-1.4, 1.4);
    rl5 = random(-1.4, 1.4);
    rl6 = random(-1.4, 1.4);
    rl7 = random(-1.4, 1.4);
    rl8 = random(-1.4, 1.4);

    state1 = 0;
    state2 = 0;
    state3 = 0;
    state4 = 0;
    state5 = 0;
    state6 = 0;
    state7 = 0;
    state8 = 0;

    scareStart1 = 0;
    scareStart2 = 0;
    scareStart3 = 0;
    scareStart4 = 0;
    scareStart5 = 0;
    scareStart6 = 0;
    scareStart7 = 0;
    scareStart8 = 0;
}

function draw() {
    BackgroundGradient();
    Stars();
    Meteor();
    GrassField();
    Fireflies();
}

function BackgroundGradient() {
    for (let y = 0; y < height; y += rectSize) {
        let h = map(y, 0, height, 220, 280);
        fill(h, 80, 50);
        rect(0, y, width, rectSize);
    }
}

function Stars() {
    starB1 = map(sin(frameCount * 0.03 + starP1), -1, 1, 120, 255);
    starB2 = map(sin(frameCount * 0.03 + starP2), -1, 1, 120, 255);
    starB3 = map(sin(frameCount * 0.03 + starP3), -1, 1, 120, 255);
    starB4 = map(sin(frameCount * 0.03 + starP4), -1, 1, 120, 255);
    starB5 = map(sin(frameCount * 0.03 + starP5), -1, 1, 120, 255);
    starB6 = map(sin(frameCount * 0.03 + starP6), -1, 1, 120, 255);
    starB7 = map(sin(frameCount * 0.03 + starP7), -1, 1, 120, 255);
    starB8 = map(sin(frameCount * 0.03 + starP8), -1, 1, 120, 255);
    starB9 = map(sin(frameCount * 0.03 + starP9), -1, 1, 120, 255);
    starB10 = map(sin(frameCount * 0.03 + starP10), -1, 1, 120, 255);
    starB11 = map(sin(frameCount * 0.03 + starP11), -1, 1, 120, 255);
    starB12 = map(sin(frameCount * 0.03 + starP12), -1, 1, 120, 255);
    starB13 = map(sin(frameCount * 0.03 + starP13), -1, 1, 120, 255);
    starB14 = map(sin(frameCount * 0.03 + starP14), -1, 1, 120, 255);
    starB15 = map(sin(frameCount * 0.03 + starP15), -1, 1, 120, 255);
    starB16 = map(sin(frameCount * 0.03 + starP16), -1, 1, 120, 255);
    starB17 = map(sin(frameCount * 0.03 + starP17), -1, 1, 120, 255);
    starB18 = map(sin(frameCount * 0.03 + starP18), -1, 1, 120, 255);
    starB19 = map(sin(frameCount * 0.03 + starP19), -1, 1, 120, 255);
    starB20 = map(sin(frameCount * 0.03 + starP20), -1, 1, 120, 255);

    fill(60, 20, starB1); circle(starX1, starY1, starS1);
    fill(60, 20, starB2); circle(starX2, starY2, starS2);
    fill(60, 20, starB3); circle(starX3, starY3, starS3);
    fill(60, 20, starB4); circle(starX4, starY4, starS4);
    fill(60, 20, starB5); circle(starX5, starY5, starS5);
    fill(60, 20, starB6); circle(starX6, starY6, starS6);
    fill(60, 20, starB7); circle(starX7, starY7, starS7);
    fill(60, 20, starB8); circle(starX8, starY8, starS8);
    fill(60, 20, starB9); circle(starX9, starY9, starS9);
    fill(60, 20, starB10); circle(starX10, starY10, starS10);
    fill(60, 20, starB11); circle(starX11, starY11, starS11);
    fill(60, 20, starB12); circle(starX12, starY12, starS12);
    fill(60, 20, starB13); circle(starX13, starY13, starS13);
    fill(60, 20, starB14); circle(starX14, starY14, starS14);
    fill(60, 20, starB15); circle(starX15, starY15, starS15);
    fill(60, 20, starB16); circle(starX16, starY16, starS16);
    fill(60, 20, starB17); circle(starX17, starY17, starS17);
    fill(60, 20, starB18); circle(starX18, starY18, starS18);
    fill(60, 20, starB19); circle(starX19, starY19, starS19);
    fill(60, 20, starB20); circle(starX20, starY20, starS20);
}

function Meteor() {
    if (meteorOn == 1) {
        fill(45, 20, 120);
        circle(meteorX - 18, meteorY - 6, meteorSize - 4);
        circle(meteorX - 36, meteorY - 12, meteorSize - 6);
        circle(meteorX - 54, meteorY - 18, meteorSize - 8);

        fill(50, 30, 255);
        circle(meteorX, meteorY, meteorSize);

        meteorX = meteorX + meteorSpeedX;
        meteorY = meteorY + meteorSpeedY;

        if (meteorX > width + 80 || meteorY > 220) {
            meteorOn = 0;
        }
    }

    if (meteorOn == 0) {
        if (frameCount % 240 == 0) {
            meteorX = random(-200, -100);
            meteorY = random(30, 120);
            meteorSpeedX = random(6, 10);
            meteorSpeedY = random(2, 4);
            meteorSize = random(6, 10);
            meteorOn = 1;
        }
    }
}

function GrassField() {
    for (let patchX = -20; patchX < width + 40; patchX += 100) {
        GrassPatch(patchX);
    }
}

function GrassPatch(patchX) {
    let patchCenterX = patchX + 50;
    let patchCenterY = height;

    let d = dist(mouseX, mouseY, patchCenterX, patchCenterY);

    let swayMul = map(d, 0, 200, 2.2, 1.0);
    if (swayMul < 1.0) swayMul = 1.0;
    if (swayMul > 2.2) swayMul = 2.2;

    let leanMul = map(d, 0, 200, 1.3, 1.0);
    if (leanMul < 1.0) leanMul = 1.0;
    if (leanMul > 1.3) leanMul = 1.3;

    for (let x = patchX - 10; x < patchX + 100; x += 8) {
        let nx = x * 0.08;

        let h = map(noise(nx * 0.7), 0, 1, 50, 100);
        let w = map(noise(nx * 0.9 + 50), 0, 1, 3, 6);
        let baseLean = map(noise(nx * 0.6 + 100), 0, 1, -18, 18);

        baseLean = baseLean * leanMul;

        let sway = sin(frameCount * 0.03 + x * 0.05) * 6 * swayMul;

        fill(124, 100, 80);
        grassBlade(x, height, h, w, baseLean + sway);
    }
}

function grassBlade(x, y, h, w, lean) {
    push();
    translate(x, y);
    rotate(radians(lean));

    let seg = 5;
    beginShape();

    for (let i = 0; i <= seg; i++) {
        let t = i / seg;
        let yy = -h * t;
        let curve = sin(t * 3) * 2.0 * t;
        let ww = w * (1 - t) + 0.5;
        vertex(-ww / 2 + curve, yy);
    }

    for (let i = seg; i >= 0; i--) {
        let t = i / seg;
        let yy = -h * t;
        let curve = sin(t * 3) * 2.0 * t;
        let ww = w * (1 - t) + 0.5;
        vertex(ww / 2 + curve, yy);
    }

    endShape();
    pop();
}

function Fireflies() {
    flyMove = sin(frameCount * 0.02) * 20;

    FireflyLogic1();
    FireflyLogic2();
    FireflyLogic3();
    FireflyLogic4();
    FireflyLogic5();
    FireflyLogic6();
    FireflyLogic7();
    FireflyLogic8();
}

function FireflyLogic1() {
    let dHome = dist(mouseX, mouseY, homeX1, homeY1);

    if (dHome < 90 && state1 == 0) {
        state1 = 1;
        scareStart1 = millis();
        wX1 = homeX1;
        wY1 = homeY1;
    }

    if (state1 == 0) {
        c1 = map(sin(frameCount * 0.05 + p1), -1, 1, 140, 255);
        Firefly(homeX1, homeY1 + sin(frameCount * 0.04 + p1) * 2, c1);
    }

    if (state1 == 1) {
        a1 = frameCount * s1 + p1;
        wY1 = homeY1 - 120 + sin(a1) * wa1 + flyMove;
        wX1 = wX1 + rl1;
        c1 = map(sin(a1), -1, 1, 120, 255);

        if (wX1 < 40 || wX1 > width - 40) rl1 = -rl1;

        Firefly(wX1, wY1, c1);

        if (millis() - scareStart1 > 10000) {
            state1 = 2;
        }
    }

    if (state1 == 2) {
        wX1 = wX1 + (homeX1 - wX1) * 0.05;
        wY1 = wY1 + (homeY1 - wY1) * 0.05;
        c1 = map(sin(frameCount * 0.05 + p1), -1, 1, 140, 255);
        Firefly(wX1, wY1, c1);

        if (dist(wX1, wY1, homeX1, homeY1) < 3) {
            wX1 = homeX1;
            wY1 = homeY1;
            state1 = 0;
        }
    }
}

function FireflyLogic2() {
    let dHome = dist(mouseX, mouseY, homeX2, homeY2);

    if (dHome < 90 && state2 == 0) {
        state2 = 1;
        scareStart2 = millis();
        wX2 = homeX2;
        wY2 = homeY2;
    }

    if (state2 == 0) {
        c2 = map(sin(frameCount * 0.05 + p2), -1, 1, 140, 255);
        Firefly(homeX2, homeY2 + sin(frameCount * 0.04 + p2) * 2, c2);
    }

    if (state2 == 1) {
        a2 = frameCount * s2 + p2;
        wY2 = homeY2 - 120 + sin(a2) * wa2 + flyMove;
        wX2 = wX2 + rl2;
        c2 = map(sin(a2), -1, 1, 120, 255);

        if (wX2 < 40 || wX2 > width - 40) rl2 = -rl2;

        Firefly(wX2, wY2, c2);

        if (millis() - scareStart2 > 10000) {
            state2 = 2;
        }
    }

    if (state2 == 2) {
        wX2 = wX2 + (homeX2 - wX2) * 0.05;
        wY2 = wY2 + (homeY2 - wY2) * 0.05;
        c2 = map(sin(frameCount * 0.05 + p2), -1, 1, 140, 255);
        Firefly(wX2, wY2, c2);

        if (dist(wX2, wY2, homeX2, homeY2) < 3) {
            wX2 = homeX2;
            wY2 = homeY2;
            state2 = 0;
        }
    }
}

function FireflyLogic3() {
    let dHome = dist(mouseX, mouseY, homeX3, homeY3);

    if (dHome < 90 && state3 == 0) {
        state3 = 1;
        scareStart3 = millis();
        wX3 = homeX3;
        wY3 = homeY3;
    }

    if (state3 == 0) {
        c3 = map(sin(frameCount * 0.05 + p3), -1, 1, 140, 255);
        Firefly(homeX3, homeY3 + sin(frameCount * 0.04 + p3) * 2, c3);
    }

    if (state3 == 1) {
        a3 = frameCount * s3 + p3;
        wY3 = homeY3 - 120 + sin(a3) * wa3 + flyMove;
        wX3 = wX3 + rl3;
        c3 = map(sin(a3), -1, 1, 120, 255);

        if (wX3 < 40 || wX3 > width - 40) rl3 = -rl3;

        Firefly(wX3, wY3, c3);

        if (millis() - scareStart3 > 10000) {
            state3 = 2;
        }
    }

    if (state3 == 2) {
        wX3 = wX3 + (homeX3 - wX3) * 0.05;
        wY3 = wY3 + (homeY3 - wY3) * 0.05;
        c3 = map(sin(frameCount * 0.05 + p3), -1, 1, 140, 255);
        Firefly(wX3, wY3, c3);

        if (dist(wX3, wY3, homeX3, homeY3) < 3) {
            wX3 = homeX3;
            wY3 = homeY3;
            state3 = 0;
        }
    }
}

function FireflyLogic4() {
    let dHome = dist(mouseX, mouseY, homeX4, homeY4);

    if (dHome < 90 && state4 == 0) {
        state4 = 1;
        scareStart4 = millis();
        wX4 = homeX4;
        wY4 = homeY4;
    }

    if (state4 == 0) {
        c4 = map(sin(frameCount * 0.05 + p4), -1, 1, 140, 255);
        Firefly(homeX4, homeY4 + sin(frameCount * 0.04 + p4) * 2, c4);
    }

    if (state4 == 1) {
        a4 = frameCount * s4 + p4;
        wY4 = homeY4 - 120 + sin(a4) * wa4 + flyMove;
        wX4 = wX4 + rl4;
        c4 = map(sin(a4), -1, 1, 120, 255);

        if (wX4 < 40 || wX4 > width - 40) rl4 = -rl4;

        Firefly(wX4, wY4, c4);

        if (millis() - scareStart4 > 10000) {
            state4 = 2;
        }
    }

    if (state4 == 2) {
        wX4 = wX4 + (homeX4 - wX4) * 0.05;
        wY4 = wY4 + (homeY4 - wY4) * 0.05;
        c4 = map(sin(frameCount * 0.05 + p4), -1, 1, 140, 255);
        Firefly(wX4, wY4, c4);

        if (dist(wX4, wY4, homeX4, homeY4) < 3) {
            wX4 = homeX4;
            wY4 = homeY4;
            state4 = 0;
        }
    }
}

function FireflyLogic5() {
    let dHome = dist(mouseX, mouseY, homeX5, homeY5);

    if (dHome < 90 && state5 == 0) {
        state5 = 1;
        scareStart5 = millis();
        wX5 = homeX5;
        wY5 = homeY5;
    }

    if (state5 == 0) {
        c5 = map(sin(frameCount * 0.05 + p5), -1, 1, 140, 255);
        Firefly(homeX5, homeY5 + sin(frameCount * 0.04 + p5) * 2, c5);
    }

    if (state5 == 1) {
        a5 = frameCount * s5 + p5;
        wY5 = homeY5 - 120 + sin(a5) * wa5 + flyMove;
        wX5 = wX5 + rl5;
        c5 = map(sin(a5), -1, 1, 120, 255);

        if (wX5 < 40 || wX5 > width - 40) rl5 = -rl5;

        Firefly(wX5, wY5, c5);

        if (millis() - scareStart5 > 10000) {
            state5 = 2;
        }
    }

    if (state5 == 2) {
        wX5 = wX5 + (homeX5 - wX5) * 0.05;
        wY5 = wY5 + (homeY5 - wY5) * 0.05;
        c5 = map(sin(frameCount * 0.05 + p5), -1, 1, 140, 255);
        Firefly(wX5, wY5, c5);

        if (dist(wX5, wY5, homeX5, homeY5) < 3) {
            wX5 = homeX5;
            wY5 = homeY5;
            state5 = 0;
        }
    }
}

function FireflyLogic6() {
    let dHome = dist(mouseX, mouseY, homeX6, homeY6);

    if (dHome < 90 && state6 == 0) {
        state6 = 1;
        scareStart6 = millis();
        wX6 = homeX6;
        wY6 = homeY6;
    }

    if (state6 == 0) {
        c6 = map(sin(frameCount * 0.05 + p6), -1, 1, 140, 255);
        Firefly(homeX6, homeY6 + sin(frameCount * 0.04 + p6) * 2, c6);
    }

    if (state6 == 1) {
        a6 = frameCount * s6 + p6;
        wY6 = homeY6 - 120 + sin(a6) * wa6 + flyMove;
        wX6 = wX6 + rl6;
        c6 = map(sin(a6), -1, 1, 120, 255);

        if (wX6 < 40 || wX6 > width - 40) rl6 = -rl6;

        Firefly(wX6, wY6, c6);

        if (millis() - scareStart6 > 10000) {
            state6 = 2;
        }
    }

    if (state6 == 2) {
        wX6 = wX6 + (homeX6 - wX6) * 0.05;
        wY6 = wY6 + (homeY6 - wY6) * 0.05;
        c6 = map(sin(frameCount * 0.05 + p6), -1, 1, 140, 255);
        Firefly(wX6, wY6, c6);

        if (dist(wX6, wY6, homeX6, homeY6) < 3) {
            wX6 = homeX6;
            wY6 = homeY6;
            state6 = 0;
        }
    }
}

function FireflyLogic7() {
    let dHome = dist(mouseX, mouseY, homeX7, homeY7);

    if (dHome < 90 && state7 == 0) {
        state7 = 1;
        scareStart7 = millis();
        wX7 = homeX7;
        wY7 = homeY7;
    }

    if (state7 == 0) {
        c7 = map(sin(frameCount * 0.05 + p7), -1, 1, 140, 255);
        Firefly(homeX7, homeY7 + sin(frameCount * 0.04 + p7) * 2, c7);
    }

    if (state7 == 1) {
        a7 = frameCount * s7 + p7;
        wY7 = homeY7 - 120 + sin(a7) * wa7 + flyMove;
        wX7 = wX7 + rl7;
        c7 = map(sin(a7), -1, 1, 120, 255);

        if (wX7 < 40 || wX7 > width - 40) rl7 = -rl7;

        Firefly(wX7, wY7, c7);

        if (millis() - scareStart7 > 10000) {
            state7 = 2;
        }
    }

    if (state7 == 2) {
        wX7 = wX7 + (homeX7 - wX7) * 0.05;
        wY7 = wY7 + (homeY7 - wY7) * 0.05;
        c7 = map(sin(frameCount * 0.05 + p7), -1, 1, 140, 255);
        Firefly(wX7, wY7, c7);

        if (dist(wX7, wY7, homeX7, homeY7) < 3) {
            wX7 = homeX7;
            wY7 = homeY7;
            state7 = 0;
        }
    }
}

function FireflyLogic8() {
    let dHome = dist(mouseX, mouseY, homeX8, homeY8);

    if (dHome < 90 && state8 == 0) {
        state8 = 1;
        scareStart8 = millis();
        wX8 = homeX8;
        wY8 = homeY8;
    }

    if (state8 == 0) {
        c8 = map(sin(frameCount * 0.05 + p8), -1, 1, 140, 255);
        Firefly(homeX8, homeY8 + sin(frameCount * 0.04 + p8) * 2, c8);
    }

    if (state8 == 1) {
        a8 = frameCount * s8 + p8;
        wY8 = homeY8 - 120 + sin(a8) * wa8 + flyMove;
        wX8 = wX8 + rl8;
        c8 = map(sin(a8), -1, 1, 120, 255);

        if (wX8 < 40 || wX8 > width - 40) rl8 = -rl8;

        Firefly(wX8, wY8, c8);

        if (millis() - scareStart8 > 10000) {
            state8 = 2;
        }
    }

    if (state8 == 2) {
        wX8 = wX8 + (homeX8 - wX8) * 0.05;
        wY8 = wY8 + (homeY8 - wY8) * 0.05;
        c8 = map(sin(frameCount * 0.05 + p8), -1, 1, 140, 255);
        Firefly(wX8, wY8, c8);

        if (dist(wX8, wY8, homeX8, homeY8) < 3) {
            wX8 = homeX8;
            wY8 = homeY8;
            state8 = 0;
        }
    }
}

function Firefly(x, y, glowAmount) {
    let d = dist(mouseX, mouseY, x, y);

    let fade = map(d, 0, 180, 0, 1);
    if (fade < 0) fade = 0;
    if (fade > 1) fade = 1;

    let escape = map(d, 0, 120, 18, 0);
    if (escape < 0) escape = 0;
    if (escape > 18) escape = 18;

    if (d < 120) {
        if (mouseX < x) {
            x = x + escape;
        } else {
            x = x - escape;
        }

        if (mouseY < y) {
            y = y + escape * 0.5;
        } else {
            y = y - escape * 0.5;
        }
    }

    let outerB = glowAmount * fade;
    let innerB = 255 * fade;

    fill(75, 60, outerB);
    circle(x, y, 42);

    fill(55, 30, innerB);
    circle(x, y, 20);
}
