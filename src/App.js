import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import HomePage from "./Pages/Home";
import RecipesRootPage from "./Pages/RecipesRoot";
import RecipesPage from "./Pages/Recipes";
import RecipeDetailPage from "./Pages/RecipeDetail";
import NewRecipePage from "./Pages/NewRecipe";
import EditRecipePage from "./Pages/EditRecipe";
import SearchResultsPage from "./Pages/SearchResults"
import { action as manipulateRecipeAction } from "./components/RecipeForm";
import { loader as recipesLoader } from "./Pages/Recipes";
import { loader as recipeLoader } from "./Pages/RecipeDetail";
import {action as deleteRecipeAction} from "./Pages/RecipeDetail"

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "recipes",
        element: <RecipesRootPage />,
        id: "all-recipes",
        loader: recipesLoader,
        children: [
          {
            index: true,
            element: <RecipesPage />,            
          },
          {
            path: ":id",
            id: "recipe-id",
            loader: recipeLoader,
            children: [
              {
                index: true,
                element: <RecipeDetailPage />,
                action: deleteRecipeAction              
              },
              {
                path: "edit",
                element: <EditRecipePage />,
                action: manipulateRecipeAction,
              },
            ],
          },
          ,
          {
            path: "new",
            element: <NewRecipePage />,
            action: manipulateRecipeAction,
          },
          {
            path: "search",
            element: <SearchResultsPage />,            
          }
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
