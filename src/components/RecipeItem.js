import { Link, useSubmit } from "react-router-dom";
import {useState} from "react";
import classes from "./RecipeItem.module.css";
import Modal from "./UI/Modal";

export default function RecipeItem({ recipe }) {
  const [openModal, setOpenModal] = useState(false);
  const submit = useSubmit();
  const actions = (
    <div>
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        No
      </button>
      <button onClick={handleConfirmDelete}>Yes</button>
    </div>
  );

  function handleConfirmDelete() {
    submit(null, { method: "delete" });
  }

  const ingredientsList = (
    <ul>
      {recipe.ingredients.split("\n").map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
  const directionsList = (
    <ul>
      {recipe.directions.split("\n").map((direction, index) => (
        <li key={index}>{direction}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Modal
        open={openModal}
        title="Are you sure?"
        message="Do you really want to delete this recipe?"
        actions={actions}
      ></Modal>
      <div className={classes.recipe}>
        <div className={classes.card}>
          <h2>{recipe.name}</h2>
          <div className={classes["card-section"]}>
            <div>{ingredientsList}</div>
            <img src={recipe.imageUrl} alt="dish" />
          </div>
          <div>{directionsList}</div>
          <h3>Source: {recipe.source}</h3>
          <menu className={classes.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={() => {
              setOpenModal(true);
            }}>Delete</button>
          </menu>
        </div>
      </div>
    </>
  );
}
