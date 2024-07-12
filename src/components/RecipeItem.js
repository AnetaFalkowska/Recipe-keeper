import { Link, useSubmit } from "react-router-dom";
import { useState } from "react";
import classes from "./RecipeItem.module.css";
import Modal from "./UI/Modal";
import FoodImg from "../assets/food.png";
import Button from "./UI/Button";

export default function RecipeItem({ recipe }) {
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

  const ingredientsList =
    recipe.ingredients !== "" ? (
      <ul>
        {recipe.ingredients.split("\n").map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    ) : (
      recipe.ingredients
    );
  const directionsList =
    recipe.ingredients !== "" ? (
      <ul>
        {recipe.directions.split("\n").map((direction, index) => (
          <li key={index}>{direction}</li>
        ))}
      </ul>
    ) : (
      recipe.ingredients
    );

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
          <h2>{recipe.name}</h2>
          <div className={classes["card-section"]}>
            {ingredientsList && <div>{ingredientsList}</div>}
            <img
              src={recipe.imageUrl || FoodImg}
              alt="dish"
              style={
                recipe.imageUrl ? {} : { height: "200px", objectFit: "contain" }
              }
            />
          </div>
          {directionsList && <div>{directionsList}</div>}
          <h3>Source: {recipe.source}</h3>
          <menu className={classes.actions}>
            <Button
              textOnly
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Delete
            </Button>
            <Button Container={Link} to="edit">
              Edit
            </Button>
          </menu>
        </div>
      </div>
    </>
  );
}
