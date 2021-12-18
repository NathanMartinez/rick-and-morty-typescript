import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/search-bar.scss";

type SubmitType =
  | React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement>;

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event: SubmitType) => {
    event.preventDefault();
    console.log(searchText);
    setSearchText("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
    console.log(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button onClick={handleSubmit}>{<SearchIcon />}</button>
    </form>
  );
}

export default SearchBar;
