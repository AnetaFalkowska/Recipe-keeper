import { Form, json, redirect, useNavigate } from "react-router-dom";
import classes from "./RecipeForm.module.css";

export default function RecipeForm({recipe, method}) {


  const navigate = useNavigate()

  function handleCancel() {
    navigate("/recipes")
  }
  return (
    <div className={classes.formContainer}>
      <Form method={method} className={classes.form}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required defaultValue={recipe ? recipe.name : ''}></input>
        </p>
        <p>
          <label htmlFor="imageUrl">Image URL</label>
          <input type="url" id="imageUrl" name="imageUrl" defaultValue={(recipe && recipe.imageUrl) ? recipe.imageUrl : ''}></input>
        </p>
        <p>
          <label htmlFor="source">Source / Online URL</label>
          <input type="text" id="source" name="source" defaultValue={(recipe && recipe.source)  ?  recipe.source : ''}></input>
        </p>
        <p>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea rows="8" id="ingredients" name="ingredients" defaultValue={(recipe && recipe.ingredients)  ?  recipe.ingredients : ''}></textarea>
        </p>
        <p>
          <label htmlFor="directions">Directions</label>
          <textarea rows="8" id="directions" name="directions" defaultValue={(recipe && recipe.directions)  ?  recipe.directions : ''}></textarea>
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button>Save Recipe</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  
  const data = await request.formData();
  const ingredients = data.get("ingredients").replace(/\n/g, "\n")
  const directions = data.get("directions").replace(/\n/g, "\n")
  const recipeData = {
    name: data.get("name"),
    imageUrl: data.get("imageUrl"),
    source: data.get("source"),
    ingredients,
    directions
  };

  let method = request.method

  let url = "http://localhost:5000/recipes";
  if (method==="PATCH") {
    const recipeId = params.id
    console.log(recipeId)
    url = "http://localhost:5000/recipes/" + recipeId
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipeData),
  });
  if (!response.ok) {
    throw json({ message: "Could not save recipe" }, { status: 500 });
  }
  return redirect("/recipes");
}
