import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/otherspage">Go to Others Page</Link>
    </div>
  );
};

export default HomePage;
