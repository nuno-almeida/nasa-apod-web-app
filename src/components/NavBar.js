import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import useViewport from "../hooks/useViewport";
import AppButton from "./utils/AppButton";

const iconPath = process.env.PUBLIC_URL + "/assets/logo.png";

const NavigationLink = ({ to, text }) => {
  const viewport = useViewport();
  const isLarge = viewport === "lg";

  return (
    <NavLink
      className={({ isActive }) =>
        `nav-link ${isLarge && "px-4"}${isActive ? " text-primary" : ""}`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

const NavBar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const viewport = useViewport();
  const isLarge = viewport === "lg";

  const logoutHandler = () => logout();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <Link className="navbar-link" to="/">
        <img
          src={iconPath}
          width="60"
          height="60"
          alt=""
          style={{ borderRadius: "32px" }}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`d-lg-flex justify-content-lg-between w-100 collapse navbar-collapse${
          showMenu && " show"
        }`}
      >
        <ul className="navbar-nav mr-auto">
          {isAuth && (
            <>
              <NavigationLink to="/today" text="Today" />
              <NavigationLink to="/date" text="By Date" />
            </>
          )}
        </ul>

        <div>
          {isAuth && (
            <AppButton
              classes="btn-outline-primary my-2"
              clickHandler={logoutHandler}
              text="Logout"
            />
          )}

          {!isAuth && (
            <div
              className={`d-flex ${
                !isLarge && "flex-column align-items-start "
              }my-2`}
            >
              <AppButton
                classes="btn-outline-primary px-4 m-2"
                as="link"
                linkTo="/register"
                text="Register"
              />
              <AppButton
                classes="btn-primary px-4 m-2"
                as="link"
                linkTo="/login"
                text="Login"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
