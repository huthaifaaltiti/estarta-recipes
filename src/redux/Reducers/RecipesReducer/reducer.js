// Recipes Reducer Constants
import * as RECIPES_CONSTANTS from "./constants";

// recipesReducer state
const initialState = {
  allRecipes: [],
  sentRecipeCategory: [],

  loading: false,
  error: null,
};

// recipesReducer
const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_CONSTANTS.RECIPES_FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RECIPES_CONSTANTS.RECIPES_FETCH_DATA_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
      };

    case RECIPES_CONSTANTS.RECIPES_SEND_RECIPE_CATEGORY:
      return {
        ...state,
        sentRecipeCategory: action.payload,
      };

    case RECIPES_CONSTANTS.RECIPES_SEND_RECIPE_COMMENT:
      const { userName, userStatus, commentContent, checkedRecipe } =
        action.payload;

      const neededRecipe =
        state.sentRecipeCategory[0].RecipeSubCategories.filter(
          (category) =>
            checkedRecipe[0].RecipeSubCategoryName ===
            category.RecipeSubCategoryName
        );

      const newNeededRecipe = {
        ...neededRecipe[0],
        RecipeSubCategoryComments: [
          ...neededRecipe[0].RecipeSubCategoryComments,
          {
            RecipeSubCategoryCommentPic: "https://i.pravatar.cc/",
            RecipeSubCategoryCommentUsername: userName,
            RecipeSubCategoryCommentSubUsername: userStatus,
            RecipeSubCategoryCommentContent: commentContent,
          },
        ],
      };

      const newCatSate = state.sentRecipeCategory[0].RecipeSubCategories.map(
        (category) =>
          checkedRecipe[0] === category ? newNeededRecipe : category
      );

      console.log(state.sentRecipeCategory[0]);

      return {
        ...state,
        sentRecipeCategory: [
          { ...state.sentRecipeCategory, RecipeSubCategories: [...newCatSate] },
        ],
      };

    case RECIPES_CONSTANTS.RECIPES_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
