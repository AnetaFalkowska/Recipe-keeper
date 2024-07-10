import FoodImg from "../assets/ramen.png"
import classes from "./Header.module.css"
import SearchBar from "./SearchBar";


export default function Header() {
  return (
    <section className={classes['main-header']}>
      <div className={classes.logo}>
        <img src={FoodImg} alt="ramen picture" />
        <h1>Recipe keeper</h1>        
      </div>
      <SearchBar />
    </section>
  );
}

