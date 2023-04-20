// react
import React from "react";
// react-redux
import { useDispatch } from "react-redux";

// function creator
import { deleteRecipeComment } from "../../redux/Reducers/RecipesReducer/actions";

// styles, icon
import styles from "./styles.module.css";
import { AiOutlineDelete } from "react-icons/ai";

export default function AddRecipeComment({
  recipeComment,
  sentRecipeCategory,
  checkedRecipeForDel,
}) {
  const dispatch = useDispatch();

  const handleDeleteComment = () => {
    dispatch(
      deleteRecipeComment(
        recipeComment,
        sentRecipeCategory,
        checkedRecipeForDel
      )
    );
  };

  return (
    <div className={styles.singleRecipeCommentCont}>
      <span onClick={handleDeleteComment} className={styles.deleteIconCont}>
        <AiOutlineDelete className={styles.deleteIcon} />
      </span>

      <p className={styles.singleRecipeCommentContent}>
        {recipeComment?.RecipeSubCategoryCommentContent}.
      </p>

      <div className={styles.commentUserCont}>
        <div className={styles.commentUserImgCont}>
          <img
            src={recipeComment?.RecipeSubCategoryCommentPic}
            alt="Comment of unknown user"
          />
        </div>

        <div className={styles.commentUserNameCont}>
          <p className={styles.commentUsername}>
            {recipeComment?.RecipeSubCategoryCommentUsername}
          </p>
          <p className={styles.commentSubUsername}>
            {recipeComment?.RecipeSubCategoryCommentSubUsername}
          </p>
        </div>
      </div>
    </div>
  );
}
