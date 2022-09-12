import React from "react"
import Styled from "./Child.module.css"

class ClassChild extends React.Component {
  render() {
    return (
      <div>
        <div className={Styled.circle}></div>
        <div className={Styled.rectangle}></div>
        <div className={Styled.rectangleOne}></div>
      </div>
    )
  }
}

export default ClassChild
