import classes from "./Finder.module.css";
import SearchIcon from "../assets/glass.png";

export default function Finder() {
  return (
    <form className={classes.finder}>
      <input placeholder="Search"></input>
      <button type="submit">
        <img className={classes["search-icon"]} src={SearchIcon} />
      </button>
    </form>
  );
}
