import { Link } from "react-router-dom";

//Represents a single encapsulated item in the navbar
function NavBarItem({ image, link, name, ...props }) {
  const path = window.location.pathname;
  let className =
    props.className === undefined ? "navbar-item" : props.className;

  return (
    <div className={className}>
      {image && <img src={image} />}
      <Link to={link}>{name}</Link>
    </div>
  );
}
export default NavBarItem;
