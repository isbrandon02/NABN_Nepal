import logo from './logo.png'
import { Link } from "react-router-dom";
import './Header.css'


function Header() {
    return (

        <header className="header">

          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
              <span className="org-name">NABN</span>
            </Link>

          </div>
          <nav className="nav-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/AboutUs">ABOUT US</a></li>
              <li><a href="/events">EVENTS</a></li>
              <li><a href="/contact">CONTACT</a></li>
              <li><a href="/donate">DONATE</a></li>
            </ul>
          </nav>
        </header>
      )
}

export default Header
