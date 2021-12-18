import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
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
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
