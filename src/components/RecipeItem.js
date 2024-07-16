import { Link, useSubmit } from "react-router-dom";
import { useState, useMemo, useSubmitt } from "react";
import classes from "./RecipeItem.module.css";
import Modal from "./UI/Modal";
import FoodImg from "../assets/food.png";
import Button from "./UI/Button";

export default function RecipeItem({ recipe, type }) {
  const [openModal, setOpenModal] = useState(false);
  const submit = useSubmit();
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
      <Button onClick={handleConfirmDelete}>Yes</Button>
    </>
  );

  function handleConfirmDelete() {
    submit(null, { method: "delete" });
  }

  let onlineRecipeIngredients = useMemo(() => {
    if (type !== "online") return [];
    const ingredientsArray = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "")
        ingredientsArray.push(`${ingredient}: ${measure}`);
    }
    return ingredientsArray;
  }, [recipe, type]);

  const ingredients =
    type === "local" ? recipe.ingredients.split("\n") : onlineRecipeIngredients;
  const directions =
    type === "local" ? recipe.directions : recipe.strInstructions;
  const title = type === "local" ? recipe.title : recipe.strMeal;
  const image = type === "local" ? recipe.imageUrl : recipe.strMealThumb;
  const source = type === "local" ? recipe.source : recipe.strYoutube;

  function saveToLocalRecipes() {
    const newRecipe = {
      title,
      imageUrl: image,
      source,
      ingredients: ingredients.join("\n"),
      directions,
    };
    submit(newRecipe, { method: "post", action: "/recipes/new" });
  }

  return (
    <>
      <Modal
        open={openModal}
        title="Are you sure?"
        message="Do you really want to delete this recipe?"
        actions={actions}
        onClose={() => {
          setOpenModal(false);
        }}
      ></Modal>
      <div className={classes.recipe}>
        <div className={classes.card}>
          <h2>{title}</h2>
          <div className={classes["card-section"]}>
            {ingredients.length !== 0 && (
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            )}
            <img
              src={image || FoodImg}
              alt="dish"
              style={image ? {} : { height: "200px", objectFit: "contain" }}
            />
          </div>
          {directions.length !== 0 && (
            <ul>
              {directions.split("\n").map((direction, index) => (
                <li key={index}>{direction}</li>
              ))}
            </ul>
          )}
          <h3>Source: {source}</h3>
          <menu className={classes.actions}>
            {type==="local" ? <><Button
              textOnly
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Delete
            </Button>
            <Button Container={Link} to="edit">
              Edit
            </Button></> :
            <Button onClick={saveToLocalRecipes}>
              Save to my recipes
            </Button>}
          </menu>
        </div>
      </div>
    </>
  );
}
