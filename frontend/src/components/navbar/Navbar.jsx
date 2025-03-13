function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto gap-5">
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      Mopile App Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Blogs 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  About Us 
                </a>
              </li>              <li className="nav-item">
                <a className="nav-link" href="">
                  Cost Estimator 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
