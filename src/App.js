import { useState } from 'react';
import {Home} from './Home'

function App() {
  const [counter,setCounter] = useState(0);

  return (
    <div className="App">
     
     <Home value1={counter}/>
    <button onClick={()=>setCounter(counter+1)}>Counter</button>
    </div>
  );
}

export default App;
