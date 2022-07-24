import React from 'react';
import Sketch from 'react-p5';

function App() {
  let r = 50
  let t = 0

  class Vector {
    constructor(arr) {
      this.arr = arr;
    }
    add(otherVector) {
      const oa = otherVector.arr;
      if (this.arr.length === oa.length) {
        let res = []
        for(let key in this.arr) {
          res[key] = this.arr[key] + oa[key]
        }
        return new Vector(res)
      }
    }
  }

  const setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(parent)
  }
  function polar(r, t){
   return new Vector([r* Math.cos(t), r* Math.sin(t)])
  }


  const draw = p5 => {
    p5.background(0)
    p5.point(polar(r,t))
    t++
  }


  return <div className='App'>

    <Sketch setup={setup} draw={draw} />
  </div>
  
}
export default App;
