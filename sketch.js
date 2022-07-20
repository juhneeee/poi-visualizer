function setup() {
  createCanvas(400, 400);

}

const TWO_PI = 6.28318530717958647693

let r=20
let t=0
let redOffset = TWO_PI / 2
let increment = .5
let poiSpeed = -1
let n=3
function draw() {
  background("white");
  translate(width/2, height/2)
  middle()
  // leftHand()
  // rightHand()
  
  stroke("blue")
  strokeWeight(10)
  
  // printOrbitals(4)
  
  // poiPath(r,t)
  
  for (let i =0; i<n; i++){
  stroke(color(0, 0, 200+10*n))
  poiPath(r,t + (i/n)*TWO_PI)
  }
  
  t += .1 * increment
}

function leftHand(){
  stroke("blue")
  strokeWeight(10)
  parametricCircle(r,t)
}

function rightHand(){
  stroke("red")
  strokeWeight(10)
  parametricCircle(r,t+redOffset)
}

function middle(){
  stroke("black")
  strokeWeight(3)
  point(0,0)
}

function parametricCircle(r, t){
  point (r * cos(t), r * sin(t))
}

function printOrbitals(n){
  for (let i =0; i<n; i++){
    parametricCircle(r,t + (i/n)*TWO_PI)
  }
}

function poiPath(r,t){
  point (
    5 *r * cos(t) +r *cos(poiSpeed*-2*t), 
    5 *r * sin(t) +r *sin(poiSpeed*-2*t)
        )
}

