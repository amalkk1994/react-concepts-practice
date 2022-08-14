import { useState, useCallback } from "react"
import ChildForCallBack from "./ChildForCallBack"
const ParentForCallBack = () => {
  console.log("parent for useCallBack rerendered!")
  const [parentCounter, setParentCounter] = useState(0)

  const increment = () => {
    setParentCounter(parentCounter + 1)
  }

  const resetFunc = useCallback(() => {
    setParentCounter(0)
  }, [])

  return (
    <div>
      <h1>Parent for useCallBack scenario</h1>
      <p>{parentCounter}</p>
      <button onClick={increment}>Parent Increment</button>
      <ChildForCallBack resetFunc={resetFunc} />
    </div>
  )
}

export default ParentForCallBack
