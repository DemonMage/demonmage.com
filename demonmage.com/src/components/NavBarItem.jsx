function NavBarItem(props) {
  return (
    <div className="navbar-item">
      <img src={props.image} />
      {props.name}
    </div>
  );
}
export default NavBarItem;
