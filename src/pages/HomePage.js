import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/otherspage">Go to Others Page</Link>
      <Link to="/formpage">Go to forms page</Link>
      <Link to="/apitestpage">API Test page</Link>
      <Link to="/apitestpagefetch">API Test page using fetch</Link>
      <Link to="/reduxpage">Redux page</Link>
      <Link to="/rerender">Re render page</Link>
    </div>
  )
}

export default HomePage
