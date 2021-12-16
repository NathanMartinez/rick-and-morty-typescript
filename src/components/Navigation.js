import { Link } from "react-router-dom";
import "../styles/navigation.scss";

function Navigation() {
  return (
    <nav>
      <Link className="h1" to="/">
        Rick and Morty
      </Link>
      <ul>
        <Link className="li" to="characters">
          Characters
        </Link>
        <Link className="li" to="episodes">
          Episodes
        </Link>
        <Link className="li" to="locations">
          Locations
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
