function setup() {
    createCanvas(800, 400);
    background(250);
    fill(50);
    rectMode(CENTER);
    rect(300, 400, 200, 200);
    rect(150, 250, 90, 300);
    rect(450, 250, 90, 300);
     
    // A triangle at (100, 250), (250, 170) and (330, 300)   
    triangle(200, 100, 300, 15, 400, 100); 

    rectMode(CENTER);
}
