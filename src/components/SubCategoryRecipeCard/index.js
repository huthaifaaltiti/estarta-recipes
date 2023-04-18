// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// component
import DoActionBtn from "../DoActionBtn";

// styles
import styles from "./styles.module.css";

export default function SubCategoryRecipeCard({ subRecipe, recipeCategory }) {
  return (
    <div
      className={styles.recipeSubCategoryBody}
      style={{
        backgroundImage: `url(${subRecipe.RecipeSubCategoryPic})`,
      }}
    >
      <h2>{subRecipe.RecipeSubCategoryName}</h2>

      <div className={styles.btnCont}>
        <Link
          
          to={`/recipes/${recipeCategory}/${subRecipe.RecipeSubCategoryName}`}
        >
          <DoActionBtn text={"View Recipe"} />
        </Link>
      </div>
    </div>
  );
}
