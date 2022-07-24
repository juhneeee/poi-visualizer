let rSlider
let redOffsetSlider
let incrementSlider
let poiSpeedSlider
let nSlider
let resetButton
let toggleTrail
let showTrail = true
let fillPath = false

function setup() {
  createCanvas(400, 400);

  // rSlider= createSlider(20,100)
  // redOffsetLabel = createElement('p', 'Offset')
  // redOffsetInput = createInput(redOffsetSlider.value())
  offsetLabel = createDiv('Offset');
  offsetLabel.position(30, 500);  
  redOffsetSlider = createSlider(0, 1, .5 , .1)
  redOffsetSlider.parent(offsetLabel);

  incrementLabel = createDiv ('animation speed')
  incrementLabel.position(30, 700)
  incrementSlider = createSlider(0, 1, .3, .1)  
  incrementSlider.parent(offsetLabel)
  poiSpeedSlider = createSlider(-10, 10, -3)
  // nSlider= createSlider(1,10)
  resetButton = createButton('reset canvas')
  resetButton.mousePressed(changeBG)


  toggleTrail = createButton('show trail')
  toggleTrail.mousePressed(()=>{showTrail = !showTrail})

  toggleFill = createButton('fill in path')
  toggleFill.mousePressed(()=>{fillPath = !fillPath})


}

// let r= rSlider.value()
// let t=0
// let redOffset = redOffsetSlider.value()
// let increment = incrementSlider.value()
// let poiSpeed = poiSpeed.value()
// let n= nSlider.value()
let t=0

function draw() {

  if (!fillPath){background("white")}
  translate(width/2, height/2)
  middle()

  let r= 70
  let redOffset = redOffsetSlider.value() * TWO_PI
  let increment = incrementSlider.value()
  let poiSpeed = poiSpeedSlider .value()
  // let n= nSlider.value()

  leftHand(r,t)
  rightHand(r,t + redOffset)
  

  poiPath(r,t, poiSpeed, 'green', 'black')

  poiPath(r,t + redOffset , poiSpeed, 'orange', 'gray')
  
  // printOrbitals(4)
  // let v1 = createVector(40, 50)
  // let v2 = createVector(40, 50)
  
  // point(v1.add(v1))

  // for (let i =0; i<n; i++){
  // poiPath(r,t + (i/n)*TWO_PI, poiSpeed)
  // }
  
  t += .1 * increment
}

function leftHand(r,t){
  stroke("lightblue")
  strokeWeight(10)
  parametricCircle(r,t)
}

function rightHand(r,t){
  stroke("pink")
  strokeWeight(10)
  parametricCircle(r,t)
}

function middle(){
  stroke("black")
  strokeWeight(10)
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

function poiPath(r,t,poiSpeed, poiColor, tetherColor){
  strokeWeight(2)
  stroke(tetherColor)
  line(
    r * cos(t), 
    r * sin(t), 
    r * cos(t) +r *cos(poiSpeed*t), 
    r * sin(t) +r *sin(poiSpeed*t))


  strokeWeight(15)
  stroke(poiColor)
  point (
    r * cos(t) +r *cos(poiSpeed*t), 
    r * sin(t) +r *sin(poiSpeed*t)
        )

  if (showTrail){
    for(let i=0; i<5; i++){
      strokeWeight(15*(.66**i))
      point (
        r * cos(t - i/10) +r *cos(poiSpeed*(t - i/10)), 
        r * sin(t - i/10) +r *sin(poiSpeed*(t - i/10))
            )
    }
  }

}

function changeBG(){
  background("white")
}
