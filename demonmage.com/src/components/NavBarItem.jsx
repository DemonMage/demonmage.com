import { NavLink, useResolvedPath } from "react-router-dom";

//Represents a single encapsulated item in the navbar
function NavBarItem({ image, link, name, ...props }) {
  const className =
    props.className === undefined ? "navbar-item" : props.className;

  const resolvedPath = useResolvedPath(link);

  return (
    <div className={className}>
      {image && (
        <NavLink to={resolvedPath}>
          <img src={image} />
        </NavLink>
      )}
      <NavLink to={resolvedPath}>{name}</NavLink>
    </div>
  );
}
export default NavBarItem;
