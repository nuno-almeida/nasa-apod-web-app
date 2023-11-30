import DataContainer from "./DataContainer";
import Loading from "./Loading";

const Content = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const { title, date, explanation, url, hdurl, media_type } = data;

  return (
    <DataContainer
      key={title}
      title={title}
      date={date}
      explanation={explanation}
      url={url}
      hdurl={hdurl}
      type={media_type}
    />
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
