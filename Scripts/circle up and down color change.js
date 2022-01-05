let rectYPos = 0
let direction = 'something'

function setup() {
  tex = createCanvas(500, 500);
  tex.position(windowWidth/2, windowHeight/2)
  
}


function draw() {
  background(0);
// XXX:
  if (rectYPos ==  0)
  {
    direction = 'forward'
  }
  if (rectYPos == 449)
  {
    direction = 'backward'
  }
if (direction == 'forward'){
    rectYPos =  (frameCount/2) 

}
else {
  //fill('red')
  rectYPos = (449-frameCount/2)
  
}

if(rectYPos > 0  &&  rectYPos < 112.5)
  {
    fill ('blue')
  }
  else if (rectYPos >112.5  && rectYPos < 225) {
    fill('red')
  }
  else if (rectYPos > 225  && rectYPos < 337.5) {
    fill('yellow')
  }
  else {
    fill('green')
  }


  noStroke()
  circle ( 150, 25 + rectYPos , 50 )





}
