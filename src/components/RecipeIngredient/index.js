// react
import React, { useState } from "react";

// styles, icons
import styles from "./styles.module.css";
import { BsArrowReturnLeft, BsArrow90DegLeft } from "react-icons/bs";

export default function RecipeIngredient({ ingredient }) {
  const [showSubContent, setShowSubContent] = useState(false);

  const handleSubContentClick = () => {
    setShowSubContent(!showSubContent);
  };

  return (
    <div className={styles.recipeIngredientBody}>
      <div>
        <span className={styles.recipeIngredientName}>
          {ingredient.RecipeSubCategoryIngredientName}
        </span>

        <span
          className={styles.recipeIngredientIconCont}
          onClick={handleSubContentClick}
        >
          {showSubContent === true ? (
            <BsArrow90DegLeft className={styles.recipeIngredientIcon} />
          ) : (
            <BsArrowReturnLeft className={styles.recipeIngredientIcon} />
          )}
        </span>
      </div>

      <p
        className={styles.recipeIngredientDesc}
        style={{
          maxHeight: showSubContent ? "1000px" : "0",
          opacity: showSubContent ? "1" : "0",
          visibility: showSubContent ? "visible" : "hidden",
          transition: "max-height 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        {ingredient.RecipeSubCategoryIngredientDesc}
      </p>
    </div>
  );
}
