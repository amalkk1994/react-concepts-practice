import Container from "../components/Container";
import { Link } from "react-router-dom";

const OthersPage = () => {
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Others page!</h1>
      <Container />
    </div>
  );
};

export default OthersPage;
