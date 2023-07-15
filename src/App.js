import { useState } from "react";

function App(){

  const [value, setValue] = useState(0)

  function add(){
    setValue( value + 1);
  }

  function subtract(){
    setValue( value - 1);
  }

  function reset(){
    setValue(0);
  }

  return(
    <div className="app">
      <div className="value">
        <h1>Value: {value}</h1>
      </div>
      <div className="button">
        <button className="add btn" onClick={add}>Increase </button>
        <button className="sub btn" onClick={subtract}>Decrease </button>
      </div>
      <div className="reset">
        <button className="reset btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;