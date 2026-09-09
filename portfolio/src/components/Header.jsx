function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">
          Shabbir<span>Dev</span>
        </a>

        <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <a href="#contact" className="btn btn-primary rounded-pill px-4">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
