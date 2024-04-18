import { Outlet } from "react-router-dom";
import RecipesNavigation from "../components/RecipesNavigation";

export default function RecipesRootPage() {
  return (
    <>
      <RecipesNavigation />
      <main><Outlet /></main>      
    </>
  );
}

