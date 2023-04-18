// Recipes Reducer Constants
import * as RECIPES_CONSTANTS from "./constants";

export const fetchAllRecipes = () => async (dispatch) => {
  try {
    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_FETCH_DATA_REQUEST,
    });

    const response = await fetch("recipes.json");
    const dataResponse = await response.json();

    // console.log(dataResponse.Recipes);

    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_FETCH_DATA_SUCCESS,
      payload: dataResponse.Recipes,
    });
  } catch (error) {
    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const sendRecipeCategory = (findRecipeCategory) => (dispatch) => {
  dispatch({
    type: RECIPES_CONSTANTS.RECIPES_SEND_RECIPE_CATEGORY,
    payload: findRecipeCategory,
  });
};

export const addRecipeComment =
  (userName, userStatus, commentContent, sentRecipeCategory, checkedRecipe) =>
  (dispatch) => {
    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_SEND_RECIPE_COMMENT,
      payload: {
        userName,
        userStatus,
        commentContent,
        sentRecipeCategory,
        checkedRecipe,
      },
    });
  };

export const deleteRecipeComment =
  (recipeComment, sentRecipeCategory, checkedRecipeForDel) => (dispatch) => {
    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_DELETE_RECIPE_COMMENT,
      payload: { recipeComment, sentRecipeCategory, checkedRecipeForDel },
    });
  };
