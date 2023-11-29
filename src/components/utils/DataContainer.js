import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

const Description = ({ text }) => {
  const { isAuth } = useContext(AuthContext);
  const ref = useRef();
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();

    if (!!rect) {
      const { top, bottom } = rect;
      setPositionY((top - bottom) / 2 - 20);
    }
  }, []);

  return (
    <>
      <p
        ref={ref}
        className="card-text text-secondary py-2"
        style={{
          ...(!isAuth && { filter: "blur(3px)" }),
        }}
      >
        {text}
      </p>
      {!isAuth && positionY !== 0 && (
        <h4
          className="text-danger text-center"
          style={{
            position: "relative",
            top: "" + positionY + "px",
            fontStyle: "italic",
          }}
        >
          Description is available only for registered users
        </h4>
      )}
    </>
  );
};

const DataContainer = ({ title, date, explanation, url }) => (
  <div
    className="p-0 border"
    style={{ borderRadius: "12px", maxWidth: "600px" }}
  >
    <img
      className="card-img-top"
      src={url}
      loading="lazy"
      alt=""
      style={{ borderRadius: "12px 12px 0 0", aspectRatio: "1/1" }}
    />
    <div className="card-body p-3">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-text">{date}</h6>
      <Description text={explanation} />
    </div>
  </div>
);

export default DataContainer;