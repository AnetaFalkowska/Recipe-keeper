import RecipeItem from "../components/RecipeItem";
import { useRouteLoaderData, redirect } from "react-router-dom";

export default function RecipeDetailPage() {
  const data = useRouteLoaderData("recipe-id");

  return <RecipeItem recipe={data.recipe} />;
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:5000/recipes/" + id);

  if (!response.ok) {
    throw new Error("smth went wrong");
  }

  return response;
}

export async function action({request, params}) {
  const recipeId = params.id
  
  const response = await fetch("http://localhost:5000/recipes/" + recipeId, {method:request.method})
  if (!response.ok) {
    throw new Error("Could not delete recipe")
  }
  return redirect("/recipes")

}
