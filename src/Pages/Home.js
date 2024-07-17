import { useLoaderData } from "react-router-dom";
import RandomRecipe from "../components/RandomRecipe";

export default function HomePage() {

const data = useLoaderData()

  return (
    <>
      <h2>Browse your favorite recipes or discover a new one online!</h2>
      <RandomRecipe recipe={data.recipe}/>
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:5000/recipes/random");

  if (!response.ok) {
    throw new Error("smth went wrong");
  }

  return response;
}
