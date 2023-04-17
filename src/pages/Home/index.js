// react
import React, { useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// components
import MainRecipeCard from "../../components/MainRecipeCard";
import NavBar from "../../components/NavBar/index";

// creator functions
import { fetchAllRecipes } from "../../redux/Reducers/RecipesReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { GiHotMeal } from "react-icons/gi";

export default function Home() {
  const dispatch = useDispatch();
  const { allRecipes } = useSelector((state) => state.recipesReducer);

  console.log({ allRecipes });

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);
  return (
    <div className={styles.homePage}>
      {/* NavBar Component */}
      <NavBar />

      <div className={styles.upperHomeCont}>
        <h1>Best Trending Now.</h1>
      </div>

      <div className={styles.homeHero}>
        <div className={styles.homeHeroCont}>
          <div className={styles.homeHeroCardsCont}>
            {allRecipes?.map((singleRecipe, index) => (
              <MainRecipeCard singleRecipe={singleRecipe} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
