// react
import React, { useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// components
import MainRecipeCard from "../../components/MainRecipeCard";
import NavBar from "../../components/NavBar/index";
import Footer from "../../components/Footer";

// creator functions
import { fetchAllRecipes } from "../../redux/Reducers/RecipesReducer/actions";

// styles, icons
import styles from "./styles.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { allRecipes } = useSelector((state) => state.recipesReducer);

  useEffect(() => {
    // !allRecipes && dispatch(fetchAllRecipes());

    dispatch(fetchAllRecipes());
  }, []);

  return (
    <>
      <div className={styles.homePage}>
        {/* NavBar Component */}
        <NavBar />

        <div className={styles.upperHomeCont}>
          <h1>Best Trending Now.</h1>
        </div>

        <div className={styles.homeHero}>
          {/* For decorations */}

          <div className={styles.decorationsCont}>
            <div className={styles.circlesContainer}>
              <div class={styles.outerCircle}>
                <div class={styles.innerCircle}></div>
              </div>
            </div>

            <div
              className={`${styles.circlesContainer} ${styles.circleContainer2}`}
            >
              <div class={styles.outerCircle}>
                <div class={styles.innerCircle}></div>
              </div>
            </div>
          </div>

          <div className={styles.homeHeroCont}>
            <div className={styles.homeHeroCardsCont}>
              {allRecipes?.map((singleRecipe, index) => (
                <MainRecipeCard singleRecipe={singleRecipe} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCont}>
        <Footer />
      </div>
    </>
  );
}
