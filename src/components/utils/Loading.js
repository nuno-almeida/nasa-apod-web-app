import useViewport from "../../hooks/useViewport";

const Loading = () => {
  const viewport = useViewport();
  const isLarge = viewport === "lg";

  return (
    <div
      className={`spinner-border ${!isLarge && "spinner-border-sm"}`}
      role="status"
    ></div>
  );
};

export default Loading;
