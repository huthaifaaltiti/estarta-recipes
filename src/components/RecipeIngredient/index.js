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

      {showSubContent && (
        <p className={styles.recipeIngredientDesc}>
          {ingredient.RecipeSubCategoryIngredientDesc}
        </p>
      )}
    </div>
  );
}
