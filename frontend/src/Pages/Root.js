import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import ScrollToTop from "../components/UI/ScrollToTop";
import Footer from "../components/UI/Footer"

function RootPage() {
  return (
    <div>
      <ScrollToTop/>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootPage;
