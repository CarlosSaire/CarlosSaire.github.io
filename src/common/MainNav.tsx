import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/9-25"
          style={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            color: "#fff",
            textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
          }}
        >
          9-25❤️
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: "#fff",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
