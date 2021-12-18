import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import SearchBar from "./SearchBar";

function Navigation() {
  return (
    <nav>
        <Link className="h1" to="/">
          Rick and Morty
        </Link>
      <div>
        <SearchBar />
        <Link className="li" to="characters">
          Characters
        </Link>
        <Link className="li" to="episodes">
          Episodes
        </Link>
        <Link className="li" to="locations">
          Locations
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
