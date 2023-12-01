import useViewport from "../../hooks/useViewport";

const getWidthClass = (viewport) =>
  viewport === "lg" ? "w-25" : viewport === "md" ? "w-50" : "w-100";

const AuthWrapper = ({ children }) => {
  const viewport = useViewport();

  return (
    <div className={`container py-4 ${getWidthClass(viewport)}`}>
      {children}
    </div>
  );
};

export default AuthWrapper;
