export function Digits({updateCalc, calculate}){

  const createDigits = () => {
    const digits=[];

    for (let i=1; i<10; i++){
      digits.push(
        <button key={{i}} onClick={()=> updateCalc(i.toString())}>{i}</button>
      )
    }
    return digits
  }

  return(
    <div className="digits">
          {createDigits()}
          <button onClick={()=> updateCalc('0')} >0</button>
          <button onClick={()=> updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
  )
}