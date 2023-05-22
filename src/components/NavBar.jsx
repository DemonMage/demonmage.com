import "./NavBar.css";
import NavBarItem from "./NavBarItem";
import FOLDER_IMAGE from "../assets/folder.svg";
import ABOUT_IMAGE from "../assets/about.svg";

//Represents a container holding a series of nav items to display as a navigation bar
function NavBar() {
  const HOME_LINK = "/";
  const PROJECT_LINK = "/projects";
  const ABOUT_LINK = "/about";

  return (
    <div className="navbar-container">
      <NavBarItem className="site-title" name="Home" link={HOME_LINK} />
      <ul>
        <li>
          <NavBarItem
            name="Projects"
            image={FOLDER_IMAGE}
            link={PROJECT_LINK}
          />
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
