import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/UI/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = error.status

  if (error.status === 500) {
    message = error.data.message
  }

  if (error.status === 404) {
    message = "Could not find the page"
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
