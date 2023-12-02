import { useState } from "react";
import DataContainer from "./DataContainer";
import Loading from "./Loading";

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
        className="carousel-control-prev"
        type="button"
        onClick={prevHandler}
        style={{ height: "100px" }}
      >
        <span
          className="carousel-control-prev-icon bg-black"
          style={{ borderRadius: "16px", width: "3rem", height: "3rem" }}
        />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        onClick={nextHandler}
        style={{ height: "100px" }}
      >
        <span
          className="carousel-control-next-icon bg-black"
          style={{ borderRadius: "16px", width: "3rem", height: "3rem" }}
        />
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
