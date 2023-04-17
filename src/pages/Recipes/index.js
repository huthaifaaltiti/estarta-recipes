// react
import React from "react";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// components
import SubCategoryRecipeCard from "../../components/SubCategoryRecipeCard";
import DoActionBtn from "../../components/DoActionBtn";

// styles
import styles from "./styles.module.css";

export default function Recipes() {
  const { recipeCategory } = useParams();
  const nav = useNavigate();
  const { allRecipes } = useSelector((state) => state.recipesReducer);
  const findRecipeCategory = allRecipes.filter(
    (recipe) => recipe.RecipeCategory === recipeCategory
  );

  return (
    <div className={styles.recipesPage}>
      <div
        className={styles.recipesPageIntro}
        style={{
          backgroundImage: `url(${findRecipeCategory[0].RecipeCategoryPic})`,
        }}
      >
        <div className={styles.recipesPageIntroCont}>
          <h1>{findRecipeCategory[0].RecipeCategory}</h1>
        </div>

        <span
          onClick={() => {
            nav("/");
          }}
        >
          <DoActionBtn text={"Back to Home page"} />
        </span>
      </div>

      <div className={styles.recipeDetailsCont}>
        <div>
          <h2>Description</h2>
          <p>{findRecipeCategory[0].RecipeCategoryDesc}</p>
        </div>

        <div>
          <h2>{`Main ${findRecipeCategory[0].RecipeCategory} Dishes`}</h2>
          <div className={styles.subRecipeCategoriesCont}>
            {findRecipeCategory[0].RecipeSubCategories.map(
              (subRecipe, index) => (
                <SubCategoryRecipeCard subRecipe={subRecipe} key={index} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
