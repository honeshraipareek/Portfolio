let sal = 0;
let dsal = 0;
let FixTax = 0;
let tax = 0;
let otpt = 0;

function setup() {
  createCanvas(400, 400);
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

text('Your payable tax is' + otpt )

}