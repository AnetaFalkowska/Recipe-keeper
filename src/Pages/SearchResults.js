import { useLocation, useRouteLoaderData } from "react-router-dom";
import RecipeList from "../components/RecipeList";

export default function SearchResultsPage() {
  const data = useRouteLoaderData("all-recipes");
  const allRecipes = data.recipes;
  const location = useLocation();
  const searchItem = location.state;

  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.name
        .toLocaleLowerCase()
        .includes(searchItem.toLocaleLowerCase()) ||
      recipe.ingredients
        .toLocaleLowerCase()
        .includes(searchItem.toLocaleLowerCase())
  );

  return <RecipeList recipes={filteredRecipes} />;
}
