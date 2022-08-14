import React from "react"

const Child = (props) => {
  console.log("Child rerendered!")
  return (
    <div>
      <h2>Child</h2>
      <p>{props.counter}</p>
    </div>
  )
}

export default React.memo(Child)

// now child get rendered only when the prop changes
