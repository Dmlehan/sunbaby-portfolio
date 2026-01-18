// import   "../App.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
