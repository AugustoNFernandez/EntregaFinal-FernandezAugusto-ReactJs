import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <header className="navContainer">
      <section>
        <Link to="/">
          <img src="src/components/img/LogoHead.svg" alt="LogoHead" className="logoHead"/>
        </Link>
      </section>
      <nav className="menu">
        <ul className="lista">
        <Link to="/">Home</Link>
          <Link to="/category/biografias">Biografías</Link>
          <Link to="/category/ficcion">Ficción</Link>
          <Link to="/category/terror">Terror</Link>
        </ul>
        <CartWidget />
      </nav>      
    </header>
  );
}
 

