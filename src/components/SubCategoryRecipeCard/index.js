// react
import React from "react";

// component
import DoActionBtn from "../DoActionBtn";

// styles
import styles from "./styles.module.css";

export default function SubCategoryRecipeCard({ subRecipe }) {
  return (
    <div
      className={styles.recipeSubCategoryBody}
      style={{
        backgroundImage: `url(${subRecipe.RecipeSubCategoryPic})`,
      }}
    >
      <h2>{subRecipe.RecipeSubCategoryName}</h2>

      <div className={styles.btnCont}>
        <DoActionBtn text={"View Recipe"} />
      </div>
    </div>
  );
}
