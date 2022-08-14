import { useSelector, useDispatch } from "react-redux"
import { actions } from "../redux/counterSlice"

const ReduxPage = () => {
  const counter = useSelector((state) => state.counter)
  console.log("counter", counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy())
  }

  return (
    <div>
      <h1>Redux page</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>addBy</button>
    </div>
  )
}

export default ReduxPage
