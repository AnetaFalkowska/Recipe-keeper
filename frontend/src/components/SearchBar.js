// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import classes from "./SearchBar.module.css";
// import SearchIcon from "../assets/glass.png";

// export default function SearchBar() {
//   const navigate = useNavigate();

//   const [searchBox, setSearchBox] = useState("");

//   function handleSearch() {
//     if (searchBox.trim().length !== 0) {
//       navigate("/recipes/search", { state: searchBox });
//     }
//   }

//   return (
//     <>
//       <div className={classes.loop}>
//         <button>
//           <img className={classes["search-icon"]} src={SearchIcon} />
//         </button>
//       </div>
//       <div className={classes.finder}>
//         <input
//           value={searchBox}
//           onChange={(e) => setSearchBox(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleSearch();
//             }
//           }}
//           placeholder="Search"
//         ></input>
//         <button onClick={handleSearch}>
//           <img className={classes["search-icon"]} src={SearchIcon} />
//         </button>
//       </div>
//     </>
//   );
// }
