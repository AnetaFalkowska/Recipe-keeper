import {Link, useSubmit} from "react-router-dom"
import classes from "./RecipeItem.module.css";

export default function RecipeItem({ recipe }) {

    const submit = useSubmit()

    function handleDelete() {
        console.log("deleted")
        submit(null, {method:"delete"})
    }

    const ingredientsList = <ul>{recipe.ingredients.split("\n").map((ingredient, index)=><li key={index}>{ingredient}</li>)}</ul>
    const directionsList = <ul>{recipe.directions.split("\n").map((direction, index)=><li key={index}>{direction}</li>)}</ul>
    
    return (
    <div className={classes.recipe}>
      <div className={classes.card}>
        <h2>{recipe.name}</h2>
        <div className={classes["card-section"]}>
          <div>{ingredientsList}</div>
          <img src={recipe.imageUrl}/>
        </div>
        <div>{directionsList}</div>
        <h3>Source: {recipe.source}</h3>
        <menu className={classes.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </menu>
      </div>
    </div>
  );
}