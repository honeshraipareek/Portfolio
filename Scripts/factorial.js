var angle = 0;
var slider, sld, sld1;

function setup() {
  tex = createCanvas(1000, 800);
  tex.position(windowWidth/4, windowHeight/4)

  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider.position(width/2, 210)
  
  sld = createSlider(0, 10, 4)
  sld.position(width/2, 230)
  
  sld1 = createSlider(0, 67, 50)
  sld1.position(width/2, 250)
  
  
}

function draw() {
  background(14, 20,44);
  angle = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(100);
  
}

function branch(len) {
  line(0, 0, 0, -len);
 
  translate(0, -len);
  if (len > sld.value()) {
    push();
    rotate(angle);
    branch(len * sld1.value()/100);
    pop();
    push();
    rotate(-angle);
    branch(len * sld1.value()/100);
    pop();
    push();
    rotate(0)
    branch(len * 0.5);
    pop();
    
  }

  //line(0, 0, 0, -len * 0.67);
}