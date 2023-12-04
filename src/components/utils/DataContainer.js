import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import AppButton from "./AppButton";
import "./scss/DataContainer.scss";

const Description = ({ text }) => {
  const { isAuth } = useContext(AuthContext);
  const ref = useRef();
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();

    if (!!rect) {
      const { top, bottom } = rect;
      setPositionY((top - bottom) / 2 - 25);
    }
  }, []);

  return (
    <>
      <p
        ref={ref}
        className="card-text py-2"
        style={{
          ...(!isAuth && { filter: "blur(3px)" }),
        }}
      >
        {isAuth ? text : ("" + text).slice(0, 100)}
      </p>
      {!isAuth && positionY !== 0 && (
        <h4
          className="text-danger text-center no-auth-decription "
          style={{
            top: "" + positionY + "px",
          }}
        >
          Description is available only for registered users
        </h4>
      )}
    </>
  );
};

const DataContainer = ({ title, date, explanation, url, hdurl, type }) => (
  <div className="p-0 data-container">
    {type === "video" ? (
      <iframe
        title={title}
        width="100%"
        style={{ aspectRatio: "16/9" }}
        src={url}
      ></iframe>
    ) : (
      <img
        className="card-img-top image-container"
        src={url}
        loading="lazy"
        alt=""
        style={{ aspectRatio: "1/1" }}
      />
    )}

    <div className="card-body p-3">
      <div className="d-flex justify-content-between">
        <h4 className="card-title">{title}</h4>
        {!!hdurl && (
          <AppButton
            classes="btn-secondary"
            clickHandler={() => window.open(hdurl)}
            text="Show HD"
          />
        )}
      </div>

      <h6 className="card-text">{date}</h6>
      <Description text={explanation} />
    </div>
  </div>
);

export default DataContainer;
