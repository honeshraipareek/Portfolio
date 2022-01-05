let test = []
let inpName, inpRoll, inpMath, impEng, inpSci, btnSub, NextCell
let nextCell = 0
function setup() {
  createCanvas(600, 500);

  inpName = createInput('')
  inpName.position(width/5 , 10)
  
  inpRoll = createInput('')
  inpRoll.position(width/12, 10)
  inpRoll.size(50)
  
  inpMath = createInput('')
  inpMath.position(width/2, 10)
  inpMath.size(30)
  
  inpEng = createInput('')
  inpEng.position(width/1.73, 10)
  inpEng.size(30)
  
  inpSci = createInput('')
  inpSci.position(width/1.52, 10)
  inpSci.size(30)
  
  btnSub = createButton('submit')
  btnSub.position(width/1.3, 10)
  btnSub.mousePressed(submitit)

}

function draw() {
  background(220);

}

function submitit(){
  
  test[nextCell] = inpName.value()
  
  console.log( "stored " + test[NextCell] + " has got Marks = ")
  
  inpName.value('')
  
  
  nextCell++
  
}