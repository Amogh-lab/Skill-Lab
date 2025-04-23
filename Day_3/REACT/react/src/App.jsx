import React, { useState } from 'react'
import './App.css'
// import Welcome from './component/welcome'

const App = () => {
  const [num, setnum]= useState(0);

  const increment=()=>{
    setnum(num+1);
  };

  const reset=()=>{
    setnum(0);
  };

  return (
    <div className='App'>
      {/* <Welcome/> */}
      <h1>Counter</h1>
      <h2>{num}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App