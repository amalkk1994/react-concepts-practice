import { useState } from "react"
import React from "react"
import Child from "./Child"

const Parent = () => {
  const [parentCounter, setParentCounter] = useState(0)
  const [childCounter, setChildCounter] = useState(0)

  const increment = () => {
    if (parentCounter >= 5) {
      setParentCounter(1)
      setChildCounter(childCounter + 5)
    } else {
      setParentCounter(parentCounter + 1)
    }
  }

  console.log("parent rerendered!")
  return (
    <div>
      <h2>Parent Counter</h2>
      <p>{parentCounter}</p>
      <button onClick={increment}>Increment</button>
      <Child counter={childCounter} />
    </div>
  )
}

export default Parent

// here child gets rerendered all the time!!
