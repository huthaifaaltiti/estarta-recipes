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
const Recipes = lazy(() => import("./pages/Recipes/index.js"));
const SingleRecipe = lazy(() => import("./pages/SingleRecipe/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        {/* <NavBar /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/recipes/:recipeCategory" element={<Recipes />} />
          <Route path="/recipes/:singleRecipeCategory" element={<SingleRecipe  />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
