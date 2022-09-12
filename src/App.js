import "./App.css"
import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import ApiTestPage from "./pages/ApiTestPage"
import ApiTestPageFetch from "./pages/ApiTestPageFetch"
import ReduxPage from "./pages/ReduxPage"
import RerenderTests from "./pages/RerenderTests"
import ClassComponents from "./pages/ClassComponents"
import { Link } from "react-router-dom"
import IdParamPage from "./pages/IdParamPage"
import QueryParamPage from "./pages/QueryParamPage"
//import HomePage from "./pages/HomePage";
//import OthersPage from "./pages/OthersPage";

const HomePage = React.lazy(() => import("./pages/HomePage"))
const OthersPage = React.lazy(() => import("./pages/OthersPage"))
const FormPage = React.lazy(() => import("./pages/FormPage"))

function App() {
  return (
    <div>
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/otherspage" element={<OthersPage />} />
          <Route path="/page/:id" element={<IdParamPage />} />
          <Route path="/formpage" element={<FormPage />} />
          <Route path="/apitestpage" element={<ApiTestPage />} />
          <Route path="/apitestpagefetch" element={<ApiTestPageFetch />} />
          <Route path="/reduxpage" element={<ReduxPage />} />
          <Route path="/rerender" element={<RerenderTests />} />
          <Route path="/classComponents" element={<ClassComponents />} />
          <Route path="/search" element={<QueryParamPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
