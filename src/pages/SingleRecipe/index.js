// react
import React, { useState } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// react-redux
import { useSelector } from "react-redux";

// components
import RecipeIngredient from "../../components/RecipeIngredient";
import DoActionBtn from "../../components/DoActionBtn/index";
import AddCommentModal from "../../components/AddCommentModal/index";
import AddRecipeComment from "../../components/AddRecipeComment";

// styles
import styles from "./styles.module.css";

export default function SingleRecipe() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const { singleRecipeCategory } = useParams();

  const { sentRecipeCategory } = useSelector((state) => state.recipesReducer);
  const checkedRecipe = sentRecipeCategory[0].RecipeSubCategories.filter(
    (recipe) => recipe.RecipeSubCategoryName === singleRecipeCategory
  );

  const recipeComments = checkedRecipe[0].RecipeSubCategoryComments;

  return (
    <div className={styles.singleRecipePage}>
      {/* Form modal */}
      <AddCommentModal
        sentRecipeCategory={sentRecipeCategory}
        checkedRecipe={checkedRecipe}
        show={showModal}
        handleClose={handleCloseModal}
      />

      <div
        className={styles.singleRecipePageIntro}
        style={{
          backgroundImage: `url(${checkedRecipe[0].RecipeSubCategoryPic})`,
        }}
      >
        <div className={styles.singleRecipePageIntroCont}>
          <h1>{checkedRecipe[0].RecipeSubCategoryName}</h1>
        </div>
      </div>

      <div className={styles.singleRecipeDetailsCont}>
        <div className={styles.singleRecipeDetails}>
          <div className={styles.singleRecipeDetailsComments}>
            <header>
              <p>
                Review by 100 People <span>⭐⭐⭐⭐⭐</span>
              </p>

              <span onClick={handleShowModal}>
                <DoActionBtn text={"Add Comment"} />
              </span>
            </header>

            <div>
              {recipeComments.map((recipeComment) => (
                <AddRecipeComment
                  sentRecipeCategory={sentRecipeCategory}
                  checkedRecipeForDel={checkedRecipe}
                  recipeComment={recipeComment}
                />
              ))}
            </div>
          </div>

          <div className={styles.singleRecipeDetailsIngredients}>
            <header>
              <h2>{checkedRecipe[0].RecipeSubCategoryName}</h2>
            </header>

            <h3>Recipe Ingredients</h3>
            <ul>
              {checkedRecipe[0].RecipeSubCategoryIngredients.map(
                (ingredient, index) => (
                  <li>
                    <RecipeIngredient key={index} ingredient={ingredient} />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
