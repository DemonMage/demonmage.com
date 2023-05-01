//Represents a single encapsulated item in the navbar

function NavBarItem(props) {
  return (
    <div
      className={
        props.className === undefined ? "navbar-item" : props.className
      }
    >
      {props.image && <img src={props.image} />}
      <a href={props.link}>{props.name}</a>
    </div>
  );
}
export default NavBarItem;
