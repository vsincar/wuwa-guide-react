import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#">
          <h1 className="header-title">Wuthering Waves Guide</h1>
        </a>
      </div>
      <ul className="header-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Weapons</a>
        </li>
        <li>
          <a href="#">Tier List</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
