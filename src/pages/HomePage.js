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
      <Link to="/classcomponents">Class components</Link>
      <Link to="/page/1">page 1</Link>
      <Link to="/page/2">page 2</Link>
      <Link to="/search?name=Amal&age=27">Amal</Link>
      <Link to="/search?name=Naveen&age=26">Naveen</Link>
    </div>
  )
}

export default HomePage
