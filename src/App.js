// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner/index";

// styles
import "./App.css";
import AddNewRecipe from "./pages/AddNewRecipe/index.js";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));
const Recipes = lazy(() => import("./pages/Recipes/index.js"));
const SingleRecipe = lazy(() => import("./pages/SingleRecipe/index.js"));
const AddRecipe = lazy(() => import("./pages/AddNewRecipe/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index"));

function App() {
  // return true && <Spinner />;
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        {/* <NavBar /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/recipes/:recipeCategory" element={<Recipes />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route
            path="/recipes/:recipeCategory/:singleRecipeCategory"
            element={<SingleRecipe />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
