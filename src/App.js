import React from "react";
import { useState } from "react";
import { Display } from "./Display";
import { Operators } from "./operators";
import { Digits } from "./digits";

function App() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {

    if(
      ops.includes(value)&&calc===''|| ops.includes(value)&&ops.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc+value);

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString())
    }
  }

  const calculate =() =>{
    setCalc(eval(calc).toString())
  }

  const deleteLast =() =>{
    if(calc === ''){
      return
    }

    const value = calc.slice(0,-1);
    setCalc(value)
  }

  return(
    <div className="app"> 
      <div className="calculator">
        <Display calc={calc} result={result}/>
        <Operators updateCalc={updateCalc} deleteLast={deleteLast}/>
        <Digits updateCalc={updateCalc} calculate={calculate}/>
      </div>
    </div>
  )
}

export default App;
