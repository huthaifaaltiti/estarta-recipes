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
