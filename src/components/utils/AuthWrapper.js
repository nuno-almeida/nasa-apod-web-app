import useViewport from "../../hooks/useViewport";

const getWidthClass = (viewport) =>
  viewport === "lg" ? "w-25" : viewport === "md" ? "w-50" : "w-100";

const AuthWrapper = ({ children }) => {
  const viewport = useViewport();

  return (
    <div className="w-100 d-flex justify-content-center py-4">
      <div
        className={`container d-flex flex-column gap-2 ${getWidthClass(
          viewport
        )}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
