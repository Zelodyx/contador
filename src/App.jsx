import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0)

  return(
    <div>
      <h3>Contador</h3>
      <hr />
      <h1>{Count}</h1>
      <button onClick={() => {setCount(Count+1);
      console.log(Count);}}
      type="button" 
      className="btn btn-primary">+1
      </button>
      <button onClick={() => {setCount(Count-1);
      console.log(Count);}}
      type="button" 
      className="btn btn-primary">-1
      </button>
      <button onClick={() => {setCount(Count*0);
      console.log(Count);}}
      type="button" 
      className="btn btn-primary">= 0
      </button>
    </div>
  )  
}

export default App