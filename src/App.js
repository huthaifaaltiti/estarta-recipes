// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";

// styles
import "./App.css";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));
const TestsPage = lazy(() => import("./pages/TestsPage/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index"));
const SingleTest = lazy(() => import("./pages/SingleTest/index.js"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/test/:category" element={<SingleTest  />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
