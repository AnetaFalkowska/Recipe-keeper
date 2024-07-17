import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import HomePage from "./Pages/Home";
import RecipesRootPage from "./Pages/RecipesRoot";
import RecipesPage from "./Pages/Recipes";
import RecipeDetailPage from "./Pages/RecipeDetail";
import NewRecipePage from "./Pages/NewRecipe";
import EditRecipePage from "./Pages/EditRecipe";
import SearchResultsPage from "./Pages/SearchResults";
import { action as manipulateRecipeAction } from "./components/RecipeForm";
import { loader as recipesLoader } from "./Pages/Recipes";
import { loader as recipeLoader } from "./Pages/RecipeDetail";
import { action as deleteRecipeAction } from "./Pages/RecipeDetail";
import { onlineRecipesLoader } from "./Pages/SearchResults";
import { onlineRecipeLoader } from "./Pages/RecipeDetail";
import { loader as randomRecipeLoader } from "./Pages/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: randomRecipeLoader,
        element: <HomePage />,
      },
      {
        path: "recipes",
        element: <RecipesRootPage />,
        id: "my-recipes",
        loader: recipesLoader,
        children: [
          {
            index: true,
            element: <RecipesPage />,
          },
          {
            path: ":id",
            id: "local-id",
            loader: recipeLoader,
            children: [
              {
                index: true,
                element: <RecipeDetailPage type="local"/>,
                action: deleteRecipeAction,
              },
              {
                path: "edit",
                element: <EditRecipePage />,
                action: manipulateRecipeAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewRecipePage />,
            action: manipulateRecipeAction,
          },
          {
            path: "search",
            element: <SearchResultsPage type="local"/>,
          },
        ],
      },
      {
        path: "search-online",
        id: "online-recipes",
        loader: onlineRecipesLoader,
        element: <SearchResultsPage type="online"/>,
      },
      {
        path: "search-online/:id",
        id: "online-id",
        loader: onlineRecipeLoader,
        element: <RecipeDetailPage type="online"/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
