// redux
import { combineReducers } from "redux";

// reducers
import recipesReducer from "./Reducers/RecipesReducer/reducer";

// CombineAllReducers
const AllReducers = combineReducers({
  recipesReducer,
});

export default AllReducers;
