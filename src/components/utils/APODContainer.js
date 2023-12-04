import { useState } from "react";
import DataContainer from "./DataContainer";
import Loading from "./Loading";
import "./scss/APODContainer.scss";

const Content = ({ isLoading, error, data }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const items = Array.isArray(data) ? data : [data];

  if (items.length === 0) {
    return <div className="alert alert-info">No APOD content to show!!</div>;
  }

  const item = items[sliderIndex];

  if (items.length === 1) {
    return (
      <DataContainer
        key={item.title}
        title={item.title}
        date={item.date}
        explanation={item.explanation}
        url={item.url}
        hdurl={item.hdurl}
        type={item.media_type}
      />
    );
  }

  const nextHandler = () => {
    sliderIndex === items.length - 1
      ? setSliderIndex(0)
      : setSliderIndex((prev) => prev + 1);
  };

  const prevHandler = () => {
    sliderIndex === 0
      ? setSliderIndex(items.length - 1)
      : setSliderIndex((prev) => prev - 1);
  };

  return (
    <div className="carousel slide">
      <DataContainer
        key={item.title}
        title={item.title}
        date={item.date}
        explanation={item.explanation}
        url={item.url}
        hdurl={item.hdurl}
        type={item.media_type}
      />
      <button
        className="carousel-control-prev carousel-control-btn"
        type="button"
        onClick={prevHandler}
      >
        <span className="carousel-control-prev-icon carousel-control-btn-icon" />
      </button>

      <button
        className="carousel-control-next carousel-control-btn"
        type="button"
        onClick={nextHandler}
      >
        <span className="carousel-control-next-icon carousel-control-btn-icon" />
      </button>
    </div>
  );
};

const ContentContainer = ({ children }) => (
  <div className="m-4 d-flex justify-content-center">{children}</div>
);

const APODContainer = ({
  isLoading,
  error,
  data,
  showMainContent = true,
  renderAtTop,
}) => {
  return (
    <ContentContainer>
      <div className="align-items-center d-flex flex-column gap-2">
        {!!renderAtTop && renderAtTop}
        {showMainContent && (
          <Content isLoading={isLoading} error={error} data={data} />
        )}
      </div>
    </ContentContainer>
  );
};

export default APODContainer;
