let rectYPos = 0
let direction = 'something'

function setup() {
  createCanvas(500, 500);
  background(220);
}


function draw() {
  background(220);
// XXX:
  if (rectYPos ==  0)
  {
    direction = 'forward'
  }
  if (rectYPOs == 499)
  {
    direction = 'backward'
  }
if (direction = 'forward'){
  fill ('blue')
  rectYPos = frameCount/2%500
}
else if (direction = 'backward'){
  fill('red')
  rectYPos = 499-frameCount/2%500
}

  noStroke()
  rect( 150, rectYPos , 50, 50 )





}
