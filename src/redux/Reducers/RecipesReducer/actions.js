// Recipes Reducer Constants
import * as RECIPES_CONSTANTS from "./constants";

export const fetchAllRecipes = () => async (dispatch) => {
  try {
    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_FETCH_DATA_REQUEST,
    });

    const response = await fetch("data.json");
    const dataResponse = await response.json();

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
  (
    userName,
    userStatus,
    commentContent,
    sentRecipeCategory,
    checkedRecipe,
    singleRecipeCategory
  ) =>
  (dispatch) => {
    dispatch({
      type: RECIPES_CONSTANTS.RECIPES_SEND_RECIPE_COMMENT,
      payload: {
        userName,
        userStatus,
        commentContent,
        sentRecipeCategory,
        checkedRecipe,
        singleRecipeCategory,
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

export const addNewRecipe =
  (
    mainDishCategory,
    recipeName,
    recipeDesc,
    ingredients,
    aboutIngredients,
    addRecipePic
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: RECIPES_CONSTANTS.RECIPES_FETCH_DATA_REQUEST,
      });

      let recipeIngredients = [];

      for (let i = 0; i < ingredients.length; i++) {
        const ingredient = {
          RecipeSubCategoryIngredientName: ingredients[i],
          RecipeSubCategoryIngredientDesc: aboutIngredients[i],
        };
        recipeIngredients.push(ingredient);
      }

      const newRecipeToAdd = {
        RecipeSubCategoryName: recipeName,
        RecipeSubCategoryPic: addRecipePic,
        RecipeSubCategoryIngredients: recipeIngredients,
        RecipeSubCategoryDesc: recipeDesc,
        RecipeSubCategoryComments: [
          {
            RecipeSubCategoryCommentPic: "https://i.pravatar.cc/",
            RecipeSubCategoryCommentUsername: "Comment username",
            RecipeSubCategoryCommentSubUsername: "Visitor",
            RecipeSubCategoryCommentContent: "test",
          },
        ],
      };

      const response = await fetch("data.json");
      const dataResponse = await response.json();
      dataResponse.Recipes.map((recipe) =>
        recipe.RecipeCategory === mainDishCategory
          ? recipe.RecipeSubCategories.push(newRecipeToAdd)
          : recipe
      );

      console.log("dataResponse.Recipes: ", dataResponse.Recipes);
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
