// react
import React from "react";

// styles
import styles from "./styles.module.css";

export default function AddRecipeComment({ recipeComment }) {
  return (
    <div className={styles.singleRecipeCommentCont}>
      <p className={styles.singleRecipeCommentContent}>
        {recipeComment.RecipeSubCategoryCommentContent}.
      </p>

      <div className={styles.commentUserCont}>
        <div className={styles.commentUserImgCont}>
          <img
            src={recipeComment.RecipeSubCategoryCommentPic}
            alt="Comment of unknown user"
          />
        </div>

        <div className={styles.commentUserNameCont}>
          <p className={styles.commentUsername}>
            {recipeComment.RecipeSubCategoryCommentUsername}
          </p>
          <p className={styles.commentSubUsername}>
            {recipeComment.RecipeSubCategoryCommentSubUsername}
          </p>
        </div>
      </div>
    </div>
  );
}
