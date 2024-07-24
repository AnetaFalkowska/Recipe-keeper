import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootPage() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootPage;
