import p5 from 'p5';
import React from 'react';
import Sketch from 'react-p5';

function App() {
  let r = 50
  let t = 0

  const setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(parent)
  }
  function polar(r, t){
   new p5.Vector(r* p5.cos(t), r* p5.sin(t))
  }


  const draw = p5 => {
    p5.background(0)
    p5.point(polar(r,t))
    t++
  }


  return <div className='App'>

    <Sketch setup={setup} draw={draw} />

    <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
    </div>
  </div>
  
}
export default App;
