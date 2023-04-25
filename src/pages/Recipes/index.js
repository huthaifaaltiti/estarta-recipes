// react
import React, { useEffect, useState } from "react";
// react-router-dom
import { useNavigate, useParams } from "react-router-dom";
// react-redux
import { useSelector, useDispatch } from "react-redux";

// components
import SubCategoryRecipeCard from "../../components/SubCategoryRecipeCard";
import DoActionBtn from "../../components/DoActionBtn";

// creator functions
import { sendRecipeCategory } from "../../redux/Reducers/RecipesReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Recipes() {
  const { recipeCategory } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);

  const { allRecipes } = useSelector((state) => state.recipesReducer);
  const findRecipeCategory = allRecipes.filter(
    (recipe) => recipe.RecipeCategory === recipeCategory
  );

  console.log("findRecipeCategory, Recipes page: ", findRecipeCategory);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });

    console.log({ currentSlide });
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === findRecipeCategory[0].RecipeSubCategories.length - 1) {
        return prev;
      }
      return prev + 1;
    });

    console.log({ currentSlide });
  };

  useEffect(() => {
    dispatch(sendRecipeCategory(findRecipeCategory));
  }, []);

  return (
    <div className={styles.recipesPage}>
      <div
        className={styles.recipesPageIntro}
        style={{
          backgroundImage: `url(${findRecipeCategory[0].RecipeCategoryPic})`,
        }}
      >
        <div className={styles.recipesPageIntroCont}>
          <h1>{findRecipeCategory[0].RecipeCategory}</h1>
        </div>

        <div className={styles.actionBtnCont}>
          <span
            onClick={() => {
              nav("/");
            }}
          >
            <DoActionBtn text={"Back to Home page"} />
          </span>
        </div>
      </div>

      <div className={styles.recipeDetailsCont}>
        <div>
          <h2>Description</h2>
          <p>{findRecipeCategory[0].RecipeCategoryDesc}</p>
        </div>

        <div>
          <h2>{`Main ${findRecipeCategory[0].RecipeCategory} Dishes`}</h2>

          <div className={styles.sliderCont}>
            <div className={styles.subRecipeCategoriesCont}>
              <div
                className={styles.slider}
                style={{
                  marginLeft: `-${
                    currentSlide *
                    ((100 / findRecipeCategory[0].RecipeSubCategories.length) *
                      findRecipeCategory[0].RecipeSubCategories.length)
                  }%`,
                  width: `${
                    findRecipeCategory[0].RecipeSubCategories.length * 10
                  }`,
                  transition: "margin-left 0.5s ease",
                }}
              >
                {findRecipeCategory[0].RecipeSubCategories.map(
                  (subRecipe, index) => (
                    <div
                      className={styles.sliderItem}
                      style={{
                        flex: `1 0 ${
                          100 / findRecipeCategory[0].RecipeSubCategories.length
                        }%`,
                      }}
                      key={index}
                    >
                      <SubCategoryRecipeCard
                        findRecipeCategory={findRecipeCategory}
                        recipeCategory={recipeCategory}
                        subRecipe={subRecipe}
                        key={index}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Buttons container */}
            <div className={styles.btnsCont}>
              <span
                onClick={handlePrevSlide}
                class={`${styles.sliderBtn} ${styles.sliderPrev}`}
              >
                <GrPrevious className={styles.slideBtnIcon} />
              </span>

              <span
                onClick={handleNextSlide}
                class={`${styles.sliderBtn} ${styles.sliderNext}`}
              >
                <GrNext className={styles.slideBtnIcon} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
