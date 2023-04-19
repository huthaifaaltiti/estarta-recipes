// react
import React, { useState } from "react";
// react-redux
import { useDispatch } from "react-redux";

// function creator
import { addNewRecipe } from "../../redux/Reducers/RecipesReducer/actions";

// styles
import styles from "./styles.module.css";

export default function AddNewRecipe() {
  const dispatch = useDispatch();

  const [mainDishCategory, setMainDishCategory] =
    useState("Main Dish Category");
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [aboutIngredients, setAboutIngredients] = useState([""]);

  // console.log(
  //   { mainDishCategory },
  //   { recipeName },
  //   { recipeDesc },
  //   { ingredients },
  //   { aboutIngredients }
  // );

  const handleMainDishCategory = (event) => {
    setMainDishCategory(event.target.value);
  };

  const handleRecipeName = (event) => {
    setRecipeName(event.target.value);
  };

  const handleRecipeDesc = (event) => {
    setRecipeDesc(event.target.value);
  };

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleAboutIngredientChange = (index, event) => {
    const newAboutIngredients = [...aboutIngredients];
    newAboutIngredients[index] = event.target.value;
    setAboutIngredients(newAboutIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const dataUrl = reader.result;
      localStorage.setItem("recipePic", dataUrl);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addNewRecipe(
        mainDishCategory,
        recipeName,
        recipeDesc,
        ingredients,
        aboutIngredients,
        localStorage.getItem("recipePic")
      )
    );
  };

  return (
    <div>
      <section className={styles.modalMain}>
        <header>
          <h3>Add a new recipe</h3>
        </header>

        <form onSubmit={handleSubmit} action="#">
          <select
            required
            value={mainDishCategory}
            onChange={handleMainDishCategory}
          >
            <option value="">Main Food Category</option>
            <option value="Arabic Food">Arabic Food</option>
            <option value="Turkish Food">Turkish Food</option>
            <option value="Sea Food">Sea Food</option>
          </select>

          <input
            required
            type="text"
            value={recipeName}
            onChange={handleRecipeName}
            placeholder="Recipe Name"
          />

          {ingredients?.map((ingredient, index) => (
            <div key={index}>
              <input
                required
                type="text"
                value={ingredient}
                onChange={(event) => handleIngredientChange(index, event)}
                placeholder={`Recipe Ingredient ${index + 1}`}
              />

              <input
                required
                type="text"
                value={aboutIngredients[index]}
                onChange={(event) => handleAboutIngredientChange(index, event)}
                placeholder={`About Recipe Ingredient ${index + 1}`}
              />

              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>

          <textarea
            required
            value={recipeDesc}
            onChange={handleRecipeDesc}
            placeholder="Recipe Description"
          />

          <p>Upload dish pic, not that its size less 5-10 MB</p>
          <input
            required
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
          />

          <button type="submit">Add Recipe</button>
        </form>
      </section>
    </div>
  );
}
