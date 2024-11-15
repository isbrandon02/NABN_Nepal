function Header() {
    return (
        <header className="header">
          <div className="logo">
            <img src="./logo.png" alt="Logo" />
          </div>
          <nav className="nav-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT US</a></li>
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
