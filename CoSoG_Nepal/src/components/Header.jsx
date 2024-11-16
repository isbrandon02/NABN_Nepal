import logo from './logo.png'
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (

        <header className="header">

          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="nav-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li>            <Link to="/AboutUs">ABOUT US</Link>              </li>
              <li><a href="/events">EVENTS</a></li>
              <li><a href="/blog">BLOG</a></li>
              <li><a href="/contact">CONTACT</a></li>
              <li><a href="/donate">DONATE</a></li>
            </ul>
          </nav>
        </header>
      )
}

export default Header
