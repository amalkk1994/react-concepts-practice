import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage";
//import OthersPage from "./pages/OthersPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const OthersPage = React.lazy(() => import("./pages/OthersPage"));

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/otherspage" element={<OthersPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
