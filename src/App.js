import "./App.css"
import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import ApiTestPage from "./pages/ApiTestPage"
import ApiTestPageFetch from "./pages/ApiTestPageFetch"
import ReduxPage from "./pages/ReduxPage"
import RerenderTests from "./pages/RerenderTests"
//import HomePage from "./pages/HomePage";
//import OthersPage from "./pages/OthersPage";

const HomePage = React.lazy(() => import("./pages/HomePage"))
const OthersPage = React.lazy(() => import("./pages/OthersPage"))
const FormPage = React.lazy(() => import("./pages/FormPage"))

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/otherspage" element={<OthersPage />} />
          <Route path="/formpage" element={<FormPage />} />
          <Route path="/apitestpage" element={<ApiTestPage />} />
          <Route path="/apitestpagefetch" element={<ApiTestPageFetch />} />
          <Route path="/reduxpage" element={<ReduxPage />} />
          <Route path="/rerender" element={<RerenderTests />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
