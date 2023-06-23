export function Operators({updateCalc, deleteLast}){
  return(  <div className="operators">
  <button onClick={()=> updateCalc('/')}>/</button>
  <button onClick={()=> updateCalc('*')}>*</button>
  <button onClick={()=> updateCalc('+')}>+</button>
  <button onClick={()=> updateCalc('-')}>-</button>
  <button onClick={deleteLast}>DEL</button>
</div>)
}
