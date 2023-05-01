import NavBarItem from "./NavBarItem";

import "./NavBar.css";
import homeImage from "../assets/home.svg";
import folderImage from "../assets/folder.svg";

function NavBar() {
  return (
    <div className="navbar-container">
      <NavBarItem name="Home" image={homeImage} />
      <NavBarItem name="Projects" image={folderImage} />
    </div>
  );
}
export default NavBar;
