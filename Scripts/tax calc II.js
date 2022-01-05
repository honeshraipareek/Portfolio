let sal, tex, inp, btn
let dsal = 0;
let FixTax = 0;
let tax = 0;
let otpt = 0;


function setup() {
  
 tex = createCanvas(850, 400);
  tex.position(windowWidth/2, 400)

inp = createInput('', float)
inp.position(windowWidth/2 + 200, 435)
inp.size(200)
income = inp.value();

btn = createButton('Calculate')
btn.position(windowWidth/2 + 420, 435)
btn.mousePressed(cal);


}



function cal(){
 sal = inp.value()
}

function draw() {
  background(220);

  if (sal<0)
{
    text("Please enter salary greater than 0", 50, 50)
}
else if (sal >= 0 && sal < 300000)
{   tax = "nil"
    
}
else if (sal >= 300000 && sal < 500000)
{   tax = 0.05
    dsal = sal - 300000
    
}
else if (sal >= 500000 && sal < 750000)
{   tax = 0.1
    dsal = sal - 500000
    FixTax = 10000
}
else if (sal >= 750000 && sal < 1000000)
{   tax = 0.2
    dsal = sal - 750000
    FixTax = 35000
}
else if (sal >= 1000000)
{   tax = 0.3
    FixTax = 50000
    dsal = sal - 1000000
} 

    otpt = dsal*tax + FixTax
  
    textSize(32)
    text('Your payable tax is' + otpt, windowWidth/2 - 500, 200 )
    text('The Taxable Income is' + dsal, windowWidth/2 - 500, 150)
    
    
}
  


