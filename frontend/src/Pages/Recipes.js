import { useRouteLoaderData, json } from "react-router-dom";
import RecipeList from "../components/RecipeList";

export default function RecipesPage() {
  const recipes = useRouteLoaderData("my-recipes");
  return <RecipeList recipes={recipes.recipes} />;
}

export async function loader() {
  const response = await fetch("http://localhost:5000/recipes");
  if (!response.ok) {
    throw json({ message: "Could not fetch recipes" }, { status: 500 });
  }
  return response;
}
