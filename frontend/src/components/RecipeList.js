import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import classes from "./RecipeList.module.css";
import FoodImg from "../assets/food.png";

function defaultImg(e) {
  e.target.src = FoodImg;
}

function renderLocalRecipe(recipe) {
console.log(recipe.id)
  const image = recipe.imageUrl || FoodImg;
  return (
    <li key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`} id={`recipe-${recipe.id}`} className={classes["recipe-item"]}>
        <img src={image} alt="dish" onError={defaultImg} />
        <p>{recipe.title}</p>
      </Link>
    </li>
  );
}

function renderOnlineRecipe(recipe) {
  // const recipeId = recipe.uri.split("_")[1];
  const image = recipe.strMealThumb || FoodImg;
  return (
    <li key={recipe.idMeal}>
      <Link
        to={`/search-online/${recipe.idMeal}`}
        className={classes["recipe-item"]}
      >
        <img src={image} alt="dish" onError={defaultImg} />
        <p>{recipe.strMeal}</p>
      </Link>
    </li>
  );
}

export default function RecipeList({ recipes, type, searchItem }) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const highlightedRecipeId = params.get("highlightedRecipeId");
  console.log(highlightedRecipeId)

  useEffect(() => {
    if (highlightedRecipeId) {
      const newRecipeElement = document.querySelector(
        `#recipe-${highlightedRecipeId}`
      );
      console.log(newRecipeElement)
      if (newRecipeElement) {
        newRecipeElement.scrollIntoView({ behavior: "smooth", block: "center" });
        newRecipeElement.classList.add(classes.highlight);
        setTimeout(() => {
          newRecipeElement.classList.remove(classes.highlight);   
        }, 1500);
      }
    }
  }, [highlightedRecipeId, classes.highlight]);

  const renderRecipeItem =
    !type || type === "local" ? renderLocalRecipe : renderOnlineRecipe;

  if (!recipes || recipes.length === 0) {
    return <h2>No recipes found for the query: {searchItem}</h2>;
  }

  return (
    <div className={classes.recipes}>
      {type && (
        <h2>
          {type === "online"
            ? "Recipes we found online"
            : "Finds from your recipe collection"}
        </h2>
      )}
      <ul className={classes.list}>{recipes.map(renderRecipeItem)}</ul>
    </div>
  );
}

// name
// imageUrl
// source
// ingredients
// directions
