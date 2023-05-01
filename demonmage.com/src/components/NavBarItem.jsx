//Represents a single encapsulated item in the navbar

function NavBarItem({ image, link, name, ...props }) {
  const path = window.location.pathname;
  let className =
    props.className === undefined ? "navbar-item" : props.className;

  if (path === link) {
    className = className + " active";
  }

  return (
    <div className={className}>
      {image && <img src={image} />}
      <a href={link}>{name}</a>
    </div>
  );
}
export default NavBarItem;
