import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    
    return (
        <div>
          <h1>Counter</h1>
            <h1>{counter}</h1>
            <h2>Counter</h2>
            <h4>{counter}</h4>
        </div>
    )
}

export default App;

