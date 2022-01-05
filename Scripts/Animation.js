
function setup() {
   tex = createCanvas(840, 840);
    tex.position(400, 400)
  frameRate(120)
}
  
  function draw() {
    fr = frameCount
    background(220);
 for(k=0; k<15; k++)
 {      
   for( j=0; j<15 ; j++)
      {
        for (i=0; i<15 ; i++)
          {
             fill (0.66*i*fr, 0.4*j*fr, 0.84*k*fr)
             rect( 28*j,28*i, 27, 27 )
            
            fill (1.2*k*fr, 0.77*j*fr/2, 0.41*i*fr)
             rect( (28*j) + 420, (28*i), 27, 27 )
            
            fill (0.16*j*fr, 0.87*i*fr, 0.54*k*fr)
             rect( 28*j, (28*i) + 420, 27, 27 )
            
            fill (0.45*j*fr, 0.42*k*fr/2, 1.1*i*fr)
             rect( (28*j) + 420, (28*i) + 420, 27, 27 )
             
  
          }
      }
 }
  }