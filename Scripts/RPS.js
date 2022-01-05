let compChoice = 0; 

let btnRock , btnPaper, btnScissors , btnRematch

function setup() {
    canva1 = createCanvas(windowWidth-200, 600);
    canva1.position(windowWidth/4 + 50., 400 )
  newGame();

}

function newGame()
{
  clear(); 
  background(220)
  compChoice = round (random(0.5,3.5 ) )
  
  btnRock = createButton(' Rock  ')
  btnRock.position(windowWidth/3, 430)
  btnRock.mousePressed( UCRock )
  
   btnPaper = createButton(' Paper ')
  btnPaper.position(2*windowWidth/3, 430)
  btnPaper.mousePressed( UCpaper )
  
   btnScissor = createButton(' Scissor  ')
  btnScissor.position(windowWidth, 430)
  btnScissor.mousePressed( UCScissor )
  
}

function rematch()
{   
  btnRematch = createButton( 'Rematch') 
  btnRematch.position (windowWidth, 950)
  btnRematch.mousePressed(newGame) 
  
  
}


function draw() {
  
}

function UCRock()
{
  btnPaper.hide()
  btnScissor.hide()
  textSize(28)
  textAlign(CENTER)
  fill('white')
  if (compChoice == 1) //Rock
    {  
      background( 'blue')
      text ( " It's a tie " , 150, 250)
    }
  else if ( compChoice == 2) //paper
    {
      background( 'red')
      text ( " You Lose !! " , 150, 250)
      
    }
  else  //scissor
    {  
      background( 'green')
      text ( " You Won !! " , 150, 250)
    }
  
  rematch()
  text(compChoice, 400, 400)
  noFill()
  stroke('white')
  circle(400, 390, 50)
}
function UCpaper()
{
  btnRock.hide()
  btnScissor.hide()
  
  textSize(28)
  textAlign(CENTER)
  fill('white')
 
  
  if (compChoice == 1)
    {
      background( 'green')
      text ( " You won " , 150, 250)
    }
  else if ( compChoice == 2)
    {
      background( 'blue')
      text ( " It's a tie !! " , 150, 250)
      
    }
  else
    {
      background( 'red')
      text ( " You loose !! " , 150, 250)
    }
  
  rematch()
   text(compChoice, 400, 400)
  noFill()
  stroke('white')
  circle(400, 390, 50)
}
function UCScissor()
{
   btnRock.hide()
  btnPaper.hide()
  
  textSize(28)
  textAlign(CENTER)
  fill('white')
  
  
  if (compChoice == 1)
    {
      background( 'red')
      text ( " You Loss " , 150, 250)
    }
  else if ( compChoice == 2)
    {
      background( 'green')
      text ( " You won !! " , 150, 250)
      
    }
  else
    {
      background( 'blue')
      text ( " It's a tie " , 150, 250)
    }
   text(compChoice, 400, 400)
  noFill()
  stroke('white')
  circle(400, 390, 50)
  rematch()
  
}



