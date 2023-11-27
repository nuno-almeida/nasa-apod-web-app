import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const NavBar = () => {
  const { isAuth, logout } = useContext(AuthContext);

  const logoutHandler = () => logout();

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <ul className="navbar-nav d-flex flex-row align-items-center">
        <Link className="navbar-link px-4" to="/">
          <img src="" width="30" height="30" alt="" />
        </Link>

        {isAuth && (
          <>
            <Link className="nav-link px-4" to="/today">
              Today
            </Link>

            <Link className="nav-link px-4" to="/date">
              By Date
            </Link>
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
