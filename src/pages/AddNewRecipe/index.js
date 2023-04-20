// react
import React, { useState } from "react";
// react-redux
import { useDispatch } from "react-redux";
// react-router-dom
import { useNavigate } from "react-router-dom";

// component
import DoActionBtn from "../../components/DoActionBtn/index";

// function creator
import { addNewRecipe } from "../../redux/Reducers/RecipesReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { BsReceiptCutoff, BsPlus } from "react-icons/bs";
import { MdOutlineUploadFile } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";

export default function AddNewRecipe() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [mainDishCategory, setMainDishCategory] =
    useState("Main Food Category");
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [aboutIngredients, setAboutIngredients] = useState([""]);
  const [unacceptedImageSize, setUnacceptedImageSize] = useState(false);

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
    localStorage.removeItem("recipePic");

    const file = event.target.files[0];

    if (file.size > 9 * 1024 * 1024) {
      alert("Image size should be less than 9 MB");

      setUnacceptedImageSize(false);

      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const dataUrl = reader.result;

      localStorage.setItem("recipePic", dataUrl);
    };

    setUnacceptedImageSize(true);
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

    nav(`/recipes/${mainDishCategory}`);
  };

  return (
    <div className={styles.addNewRecipePage}>
      <div className={styles.addNewRecipePageCont}>
        <header>
          <div>
            <span>
              <BsReceiptCutoff className={styles.icon} />
            </span>

            <h3>Add a New Recipe</h3>
          </div>

          <span
            onClick={() => {
              nav("/");
            }}
          >
            <DoActionBtn text={"Home Page"} icon={<BiHomeAlt2 />} />
          </span>
        </header>

        <form onSubmit={handleSubmit} action="#">
          <select
            required
            value={mainDishCategory}
            onChange={handleMainDishCategory}
          >
            <option value="" hidden>
              Main Food Category
            </option>
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
            <div className={styles.ingredientsCont} key={index}>
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
                placeholder={`Description of Recipe Ingredient ${index + 1}`}
              />

              {ingredient.length > 0 && ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  {`Remove Ingredient ${index + 1}`}
                </button>
              )}
            </div>
          ))}

          <span onClick={handleAddIngredient}>
            <DoActionBtn text={"Add More Ingredients"} icon={<BsPlus />} />
          </span>

          <textarea
            required
            value={recipeDesc}
            onChange={handleRecipeDesc}
            placeholder="Type here recipe description.."
          />

          <div className={styles.imageUploadCont}>
            <input
              required
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
            />
            <p className={styles.imageUploadNote}>
              Upload dish pic, note that its size is less than 9 MB.
            </p>
          </div>

          {unacceptedImageSize && (
            <span type="submit">
              <DoActionBtn text={"Add Recipe"} icon={<MdOutlineUploadFile />} />
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
