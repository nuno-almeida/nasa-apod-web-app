import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const iconPath = process.env.PUBLIC_URL + "/assets/logo.png";

const NavigationLink = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `nav-link px-4${isActive ? " text-primary" : ""}`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

const NavBar = () => {
  const { isAuth, logout } = useContext(AuthContext);

  const logoutHandler = () => logout();

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <ul className="navbar-nav d-flex flex-row align-items-center">
        <Link className="navbar-link px-4" to="/">
          <img
            src={iconPath}
            width="60"
            height="60"
            alt=""
            style={{ borderRadius: "32px" }}
          />
        </Link>

        {isAuth && (
          <>
            <NavigationLink to="/today" text="Today" />
            <NavigationLink to="/date" text="By Date" />
          </>
        )}
      </ul>

      <div className="px-4">
        {isAuth && (
          <button className="btn btn-outline-primary" onClick={logoutHandler}>
            Logout
          </button>
        )}

        {!isAuth && (
          <>
            <Link className="btn btn-outline-primary px-4 mx-2" to="/register">
              Register
            </Link>
            <Link className="btn btn-primary px-4" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
