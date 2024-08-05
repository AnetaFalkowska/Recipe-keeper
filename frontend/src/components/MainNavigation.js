import { NavLink, useNavigate } from "react-router-dom";
import { Search, ArrowLeft, House, Plus, BookText, User } from "lucide-react";
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
              <House strokeWidth={1.5} />
              <span className={classes['nav-text']}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <BookText strokeWidth={1.5} />
              <span className={classes['nav-text']}>My Recipes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <Plus strokeWidth={1.5} />
              <span className={classes['nav-text']}>Add Recipe</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/recipes/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <User strokeWidth={1.5} />
              <span className={classes['nav-text']}>Account</span>
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
            showFullWidthSearchBar ? classes["search-hidden"] : classes.search
          }
        >
          <button onClick={toggleSearchBar}>
            <Search />
            {/* <img className={classes["search-icon"]} src={SearchIcon} /> */}
          </button>
        </div>
        <div
          className={
            showFullWidthSearchBar ? classes["finder-visible"] : classes.finder
          }
        >
          {showFullWidthSearchBar && (
            <button className={classes.arrow} onClick={toggleSearchBar}>
              <ArrowLeft />
              {/* <img className={classes["search-icon"]} src={LeftArrow} /> */}
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
            <Search />
            {/* <img className={classes["search-icon"]} src={SearchIcon} /> */}
          </button>
        </div>
      </section>
    </header>
  );
}
