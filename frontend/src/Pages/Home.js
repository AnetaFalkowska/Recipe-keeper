import { useLoaderData, json } from "react-router-dom";
import RandomRecipe from "../components/RandomRecipe";
import PageContent from "../components/UI/PageContent"

export default function HomePage() {

const data = useLoaderData()

  return (
    <PageContent title="Browse your favorite recipes or discover a new one online!">
      <RandomRecipe recipe={data.recipe}/>
    </PageContent>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:5000/recipes/random");

  if (!response.ok) {
    throw json({ message: "Could not fetch details for random recipe" }, { status: 500 });
  }

  return response;
}
