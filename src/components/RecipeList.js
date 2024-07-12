import {Link} from "react-router-dom"
import classes from "./RecipeList.module.css"
import FoodImg from "../assets/food.png";


export default function RecipeList({ recipes }) {
  return (
    <div className={classes.recipes}>
      <ul className={classes.list}>
        {recipes.map((recipe) => {
            const id = recipe.name.replace(/\s+/g, "-");
            const imageUrl = recipe.imageUrl || FoodImg
          return (
            <li key={recipe.id} className={classes["recipe-item"]}><Link to={`/recipes/${id}`} >
            <img src={imageUrl} alt="dish" 
            onError={(e) => {
                    e.target.src = FoodImg;
                  }}
                  />
            <h3>{recipe.name}</h3>             
          </Link></li>
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
