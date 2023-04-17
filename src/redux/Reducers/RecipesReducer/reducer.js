// Recipes Reducer Constants
import * as RECIPES_CONSTANTS from "./constants";

// recipesReducer state
const initialState = {
  allRecipes: [],

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
