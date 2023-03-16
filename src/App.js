// Import React and useState 
import React from 'react'
import { useState } from 'react'

// Create new function App
// Create a new line and invoke the useState function
// Interpolate the counter into an h1 tag
// Invoke counter and make it a global variable
function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>

  )
}

export default App;