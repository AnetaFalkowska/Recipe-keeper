import {Link} from "react-router-dom"
import classes from "./RecipeList.module.css"
import FoodImg from "../assets/ramen.png";


export default function RecipeList({ recipes }) {
  return (
    <div className={classes.recipes}>
      <ul className={classes.list}>
        {recipes.map((recipe) => {
            const id = recipe.name.replace(/\s+/g, "-");
            const imageUrl = recipe.imageUrl || FoodImg
          return (
            <Link key={recipe.id} to={`/recipes/${id}`} className={classes["recipe-item"]}>
              <img src={imageUrl} />
              <h3>{recipe.name}</h3>             
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

// name
// imageUrl
// source
// ingredients
// directions
