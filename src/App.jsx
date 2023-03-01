import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0)

  return(
    <div align="center" className="mt-3">
      <h3>Contador</h3>
      <hr />
      <h1 className="mb-3">{Count}</h1> 
      <button onClick={() => {setCount(Count+1);
      console.log(Count);}}
      type="button" 
      className="btn btn-primary m-1">+1
      </button>
      <button onClick={() => {setCount(Count-1);
      console.log(Count);}}
      type="button" 
      className="btn btn-primary m-1">-1
      </button>
      <button onClick={() => {setCount(0);
      console.log(Count);}}
      type="button" 
      className="btn btn-primary m-1">0
      </button>
    </div>
  )  
}

export default App