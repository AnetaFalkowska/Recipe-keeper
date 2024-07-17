import { Link } from "react-router-dom";
import classes from "./RandomRecipe.module.css";
import FoodImg from "../assets/food.png";

export default function RandomRecipe({ recipe }) {
  const id = recipe.title.replace(/\s+/g, "-");
  const image = recipe.imageUrl || FoodImg;
  return (
    <div className={classes['random-card']}>
      <h3>Try this random recipe!</h3>
      <div className={classes["recipe-item"]}>
        <Link to={`/recipes/${id}`}>
          <img
            src={image}
            alt="dish"
            onError={(e) => {
              e.target.src = FoodImg;
            }}
          />
          <h3>{recipe.title}</h3>
        </Link>
      </div>
    </div>
  );
}
