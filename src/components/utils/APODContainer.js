import DataContainer from "./DataContainer";
import Loading from "./Loading";

const Content = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const { title, date, explanation, url } = data;

  return (
    <DataContainer
      key={title}
      title={title}
      date={date}
      explanation={explanation}
      url={url}
    />
  );
};

const ContentContainer = ({ children }) => (
  <div className="m-4 d-flex justify-content-center">{children}</div>
);

const APODContainer = ({ isLoading, error, image }) => {
  return (
    <ContentContainer>
      <Content isLoading={isLoading} error={error} data={image} />
    </ContentContainer>
  );
};

export default APODContainer;
