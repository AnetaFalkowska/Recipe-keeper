import FoodImg from "../assets/ramen.png"
import classes from "./Header.module.css"
import Finder from "./Finder";


export default function Header() {
  return (
    <header className={classes['nav-header']}>
      <div className={classes.logo}>
        <img src={FoodImg} alt="ramen" />
        <h1>Recipe keeper</h1>        
      </div>
      <Finder />
    </header>
  );
}

