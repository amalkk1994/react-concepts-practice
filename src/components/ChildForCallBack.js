import React from "react"
const ChildForCallBack = (props) => {
  console.log("Child for useCallback rerendered!")
  return (
    <div>
      <h4>Child for use Call Back case</h4>
      <button
        onClick={() => {
          props.resetFunc()
        }}
      >
        Reset from Child
      </button>
    </div>
  )
}

export default React.memo(ChildForCallBack)
