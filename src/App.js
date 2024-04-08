import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    
    return (
        <div>
          <h1>Counter 1</h1>
            <h1>{counter}</h1>
            <h2>Counter 2</h2>
            <h4>{counter}</h4>
        </div>
    )
}

export default App;

