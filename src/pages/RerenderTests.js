import Parent from "../components/Parent"
import ParentForCallBack from "../components/ParentForCallBack"

const RerenderTests = () => {
  return (
    <div>
      <h1>Re render page - use case for react memo</h1>
      <p>
        Usually the child will get rerednered when parent is rerendered. with
        React.memo, the child will be rerendered only if props changes
      </p>
      <Parent />
      <h1>Re render page - use case useCallBack</h1>
      <p>
        when a parent rerenders, a new reference for the function gets created
        with useCallBack, this can be prevented
      </p>
      <ParentForCallBack />
    </div>
  )
}

export default RerenderTests
