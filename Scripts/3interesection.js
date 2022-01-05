function setup() {
  tex = createCanvas(windowWidth, windowHeight);
  tex.position(400, 300)
  background(220);
}

function draw() {
if(mouseIsPressed)
// First row
  {
    if(mouseX<width/3 && mouseY<height/3)
      {
        fill('green')
        circle(mouseX, mouseY, 50)
      }
    else if(mouseX>width/3 && mouseX<width*2/3 && mouseY<height/3)
      {
        fill('blue')
        circle(mouseX, mouseY, 50)
      }
    else if(mouseX>width*2/3 && mouseY<height/3)
      {
        fill('red')
        circle(mouseX, mouseY, 50)
      }
// Second row
    else if(mouseX<width/3 && mouseY>height/3 && mouseY<height*2/3)
      {
        fill('pink')
        circle(mouseX, mouseY, 50)
      }
    else if(mouseX>width/3 && mouseX<width*2/3 && mouseY>height/3 && mouseY<height*2/3)
        {
          fill('yellow')
          circle(mouseX, mouseY, 50)
        }
    else if(mouseX>width*2/3 && mouseY>height/3 && mouseY<height*2/3)
          {
            fill('grey')
            circle(mouseX, mouseY, 50)
          }
//Third row
    else if(mouseX<width/3 && mouseY>height*2/3)
      {
        fill('black')
        circle(mouseX, mouseY, 50)
      }
    else if(mouseX>width/3 && mouseX<width*2/3 && mouseY>height*2/3 )
        {
          fill('brown')
          circle(mouseX, mouseY, 50)
        }
    else if(mouseX>width*2/3 && mouseY>height*2/3)
          {
            fill('purple')
            circle(mouseX, mouseY, 50)
}
  }
}