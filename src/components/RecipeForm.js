import { Form, json, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./RecipeForm.module.css";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function RecipeForm({ recipe, method }) {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const actions = (
    <>
      <Button
        textOnly
        onClick={() => {
          setOpenModal(false);
        }}
      >
        No
      </Button>
      <Button onClick={handleConfirmCancel}>Yes</Button>
    </>
  );
  function handleConfirmCancel() {
    navigate("/recipes");
  }
  return (
    <div className={classes["form-container"]}>
      <Modal
        open={openModal}
        title="Are you sure?"
        message="Do you really want to discard changes?"
        actions={actions}
        onClose={() => {
          setOpenModal(false);
        }}
      ></Modal>
      <Form method={method} className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={recipe ? recipe.title : ""}
          ></input>
        </p>
        <p>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            defaultValue={recipe && recipe.imageUrl ? recipe.imageUrl : ""}
          ></input>
        </p>
        <p>
          <label htmlFor="source">Source / Online URL</label>
          <input
            type="text"
            id="source"
            name="source"
            defaultValue={recipe && recipe.source ? recipe.source : ""}
          ></input>
        </p>
        <p>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            rows="8"
            id="ingredients"
            name="ingredients"
            defaultValue={
              recipe && recipe.ingredients ? recipe.ingredients : ""
            }
          ></textarea>
        </p>
        <p>
          <label htmlFor="directions">Directions</label>
          <textarea
            rows="8"
            id="directions"
            name="directions"
            defaultValue={recipe && recipe.directions ? recipe.directions : ""}
          ></textarea>
        </p>
        <div className={classes.actions}>
          <Button
            textOnly
            type="button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Cancel
          </Button>
          <Button>Save Recipe</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();

  const ingredients = data.get("ingredients") ? data.get("ingredients").replace(/\n/g, "\n") : "";
  const directions = data.get("directions") ? data.get("directions").replace(/\n/g, "\n") : "";

  const recipeData = {
    title: data.get("title"),
    imageUrl: data.get("imageUrl"),
    source: data.get("source"),
    ingredients,
    directions,
  };
 
  let method = request.method;

  let url = "http://localhost:5000/recipes";
  if (method === "PATCH") {
    const recipeId = params.id;
    console.log(recipeId);
    url = "http://localhost:5000/recipes/" + recipeId;
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
