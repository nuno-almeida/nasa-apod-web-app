import { Link } from "react-router-dom";
import useViewport from "../../hooks/useViewport";

const AppButton = ({
  text,
  clickHandler = () => {},
  classes = "",
  linkTo,
  as = "button",
  type = "button",
  children,
  disabled,
}) => {
  const viewport = useViewport();
  const isLarge = viewport === "lg";

  if (as === "link") {
    return (
      <Link className={`btn ${classes} ${!isLarge && "btn-sm"}`} to={linkTo}>
        {!!text && text}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`btn ${classes} ${!isLarge && "btn-sm"}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {!!text && text}
      {children}
    </button>
  );
};

export default AppButton;
