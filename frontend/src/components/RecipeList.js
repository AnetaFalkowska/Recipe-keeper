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
    <li key={recipe.id} >
      <Link to={`/recipes/${id}`} className={classes["recipe-item"]}>
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
    <li key={recipe.idMeal} >
      <Link to={`/search-online/${recipe.idMeal}`} className={classes["recipe-item"]}>
        <img src={image} alt="dish" onError={defaultImg} />
        <h3>{recipe.strMeal}</h3>
      </Link>
    </li>
  );
}

export default function RecipeList({ recipes, type, searchItem }) {
  const renderRecipeItem =
    (!type || type === "local") ? renderLocalRecipe : renderOnlineRecipe;

  if (!recipes || recipes.length === 0) {
    return <h2>No recipes found for the query: {searchItem}</h2>
  }

  return (
    <div className={classes.recipes}>
      {type && <h2>{type === "online" ? "Recipes we found online" : "Finds from your recipe collection"}</h2>}
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

