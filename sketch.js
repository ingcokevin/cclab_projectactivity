let angle = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(6);
  noStroke();
}

function draw() {
  background(220);
 
  let j =0;
  while (j < 255){
    push();
      rotate(angle);
      for (let i = 0; i < 175; i = i+15){
      push();
        translate(i,j);
        rotate(j);
        fill(j,i,random(255),random(255));
        square(i, i, 13+i);
      pop();
      }  
      j++;
    pop();
  }

  for (let x = 0; x < 400; x = x + 10){
      for (let y = 0; y < 400; y = y + 10){
        fill(random(255),random(255),random(255),15);
        rect(x,y,10,10);
      }
    }
  angle += 4;
  
}