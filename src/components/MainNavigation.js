import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import Header from "./Header";


export default function MainNavigation() {
  return (
    <>
   
      <div className={classes.menu}>
        <nav>
          <ul>
            <NavLink to="/" className={({isActive})=> isActive ? classes.active : undefined} end>Home</NavLink>
            <NavLink to="/recipes" className={({isActive})=> isActive ? classes.active : undefined}>Recipes</NavLink>
          </ul>
        </nav>
        
      </div>
      <Header />
    </>
  );
}
