import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";
import FoodImg from "../assets/food.png";
import SearchIcon from "../assets/glass.png";
import LeftArrow from "../assets/left-arrow.png";

export default function MainNavigation() {
  const [searchBox, setSearchBox] = useState("");
  const [showFullWidthSearchBar, setShowFullWidthSearchBar] = useState(false);
  const [searchType, setSearchType] = useState("local");
  const navigate = useNavigate();

  function handleSearch() {
    if (searchBox.trim().length !== 0) {
      const query = encodeURIComponent(searchBox);
      const path =
        searchType === "local" ? `/recipes/search` : `/search-online`;
      navigate(`${path}?query=${query}`);
      // navigate(`/recipes/search?query=${encodeURIComponent(searchBox)}`, { state: searchBox });
    }
  }

  function toggleSearchBar() {
    setShowFullWidthSearchBar(!showFullWidthSearchBar);
  }

  return (
    <header className={classes.header}>
      <nav className={classes.menu}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className={classes["search-section"]}>
        {!showFullWidthSearchBar && (
          <div className={classes.logo}>
            <img src={FoodImg} alt="food" />
            <h1>Recipe keeper</h1>
          </div>
        )}
        <div
          className={
            showFullWidthSearchBar ? classes["loop-hidden"] : classes.loop
          }
        >
          <button onClick={toggleSearchBar}>
            <img className={classes["search-icon"]} src={SearchIcon} />
          </button>
        </div>
        <div
          className={
            showFullWidthSearchBar ? classes["finder-visible"] : classes.finder
          }
        >
          {showFullWidthSearchBar && (
            <button className={classes.arrow} onClick={toggleSearchBar}>
              <img className={classes["search-icon"]} src={LeftArrow} />
            </button>
          )}
          <input
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search"
          ></input>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="local">My Recipes</option>
            <option value="online">Online Recipes</option>
          </select>
          <button onClick={handleSearch}>
            <img className={classes["search-icon"]} src={SearchIcon} />
          </button>
        </div>
      </section>
    </header>
  );
}
