import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <>
      <input
        className="search"
        type="text"
        placholder="Search movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </>
  );
}
export default Search;
