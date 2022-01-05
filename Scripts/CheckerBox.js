
let sldH, sldW, sldS
let Rsld, Gsld, Bsld
let rbcol
let chqbox



function setup() {
   canva = createCanvas(windowWidth, 600);
   canva.position(windowWidth/4, 400)
      
  sldH = createSlider(0, 25, 4)
  sldH.position(windowWidth, windowHeight-300)
  
  
  sldW = createSlider(0, 25, 4)
  sldW.position(windowWidth, windowHeight-280)
  
  sldS = createSlider(0, 27, 25)
  sldS.position(windowWidth, windowHeight-100)
  sldS.hide()

  rbcol = createRadio()
  rbcol.option('Colored')
  rbcol.option('Monochrome')
  rbcol.position(windowWidth, windowHeight-260)
  
  Rsld = createSlider(0, 255, 0)
  Rsld.position(windowWidth, windowHeight-240)
  Rsld.hide()
  
  Gsld = createSlider(0, 255, 0)
  Gsld.position(windowWidth, windowHeight-220)
  Gsld.hide()
  
  Bsld = createSlider(0, 255, 0)
  Bsld.position(windowWidth, windowHeight-200)
  Bsld.hide()
  
  chqbox = createCheckbox('Change Size of the Square?', false)
  chqbox.changed(sizechange)  
  chqbox.position(windowWidth, windowHeight-180)
}
  
  function draw() {
    
    background(240);
    
    
    for( j=0; j<sldH.value() ; j++)
      {
        for (i=0; i<sldW.value() ; i++)
          {
            
            if ( (i+j)%2 == 0 )
              {
                fill (Rsld.value(), Gsld.value(), Bsld.value())
              }
            else
              {
                fill(255 - Rsld.value(), 255 - Gsld.value(), 255 -Bsld.value())
              }
   
            rect( 28*j,28*i, sldS.value(), sldS.value() )
  
          }
      }
    
    if (rbcol.value() == 'Colored')
      {
        colorMode(RGB)
        Rsld.show()
        Gsld.show()
        Bsld.show()
      } 
    else if (rbcol.value() == 'Monochrome')
      {
        colorMode(RGB)
        Rsld.show()
        Gsld.hide()
        Bsld.hide()
        Bsld.value(Rsld.value())
        Gsld.value(Rsld.value())
      }
   
  }
function sizechange()
{
  if (this.checked()){
    sldS.show()  
  }
  else {
    sldS.hide()
  }
  
}