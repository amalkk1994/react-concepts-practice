import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OthersPage from "./pages/OthersPage";

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/OthersPage" element={<OthersPage />} />
      </Routes>
    </div>
  );
}

export default App;
