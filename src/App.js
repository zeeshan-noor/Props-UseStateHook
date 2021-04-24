// import { useState } from 'react';
// import {Home} from './Home'

// function App() {
//   const [counter,setCounter] = useState(0);

//   return (
//     <div className="App">
     
//      <Home value1={counter}/>
//     <button onClick={()=>setCounter(counter+1)}>Counter</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import Parent from './Parent'
import counterContext from './ContextApi'
function App() {
  let Count = useState(1)

  return (
    <counterContext.Provider value={Count}>
      <Parent />
    </counterContext.Provider>
  )
}

export default App
