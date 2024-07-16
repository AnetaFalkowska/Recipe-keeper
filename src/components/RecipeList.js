import { Link } from "react-router-dom";
import classes from "./RecipeList.module.css";
import FoodImg from "../assets/food.png";

function defaultImg(e) {
  e.target.src = FoodImg;
}

function renderLocalRecipe(recipe) {
  const id = recipe.title.replace(/\s+/g, "-");
  const image = recipe.imageUrl || FoodImg;
  return (
    <li key={recipe.id} className={classes["recipe-item"]}>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt="dish" onError={defaultImg} />
        <h3>{recipe.title}</h3>
      </Link>
    </li>
  );
}

function renderOnlineRecipe(recipe) {
  // const recipeId = recipe.uri.split("_")[1];
  const image = recipe.strMealThumb || FoodImg;
  return (
    <li key={recipe.idMeal} className={classes["recipe-item"]}>
      <Link to={`/search-online/${recipe.idMeal}`}>
        <img src={image} alt="dish" onError={defaultImg} />
        <h3>{recipe.strMeal}</h3>
      </Link>
    </li>
  );
}

export default function RecipeList({ recipes, type = "local", searchItem }) {
  const renderRecipeItem =
    type === "local" ? renderLocalRecipe : renderOnlineRecipe;

  if (recipes.length === 0) {
    return <h2>No recipes found for the query: {searchItem}</h2>
  }

  return (
    <div className={classes.recipes}>
      <h2>{type === "online" ? "Here are the search results from online recipes:" : "Here are the search results from your recipe collection:"}</h2>
      <ul className={classes.list}>
        {recipes.map(renderRecipeItem)}
      </ul>
    </div>
  );
}

// name
// imageUrl
// source
// ingredients
// directions

