// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// component
import DoActionBtn from "../DoActionBtn";

// styles, icons
import styles from "./styles.module.css";
import { GiHotMeal } from "react-icons/gi";
import { BsReceiptCutoff } from "react-icons/bs";

export default function MainRecipeCard({ singleRecipe }) {
  return (
    <div className={styles.mainRecipeCardBody}>
      <header>
        <span>
          <GiHotMeal className={styles.homeIcon} />
        </span>

        <h2>{singleRecipe.RecipeCategory}</h2>
      </header>

      <div className={styles.mainRecipeImgCont}>
        <img
          src={singleRecipe.RecipeCategoryPic}
          alt={singleRecipe.RecipeCategory}
        />

        <div className={styles.btnCont}>
          <Link to={`/recipes/${singleRecipe.RecipeCategory}`}>
            <span className={styles.cardBtn}>
              <DoActionBtn text={"All Recipes"} icon={<BsReceiptCutoff />} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
