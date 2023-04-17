// react
import React, { useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// creator functions
import {fetchAllRecipes} from "../../redux/Reducers/RecipesReducer/actions"

export default function Home() {
  const dispatch = useDispatch();
  const {allRecipes} = useSelector((state) => state.recipesReducer);

  // console.log({allRecipes});

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);
  return <div>Home</div>;
}
