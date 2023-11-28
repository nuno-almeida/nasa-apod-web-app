import DataContainer from "../utils/DataContainer";
import ContentContainer from "../utils/ContentContainer";
import useRandomImage from "../../hooks/useRandomImage";

const HomeContent = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <div className="spinner-border" role="status"></div>;
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

const Home = () => {
  const { isLoading, error, image } = useRandomImage();

  return (
    <ContentContainer>
      <HomeContent isLoading={isLoading} error={error} data={image} />
    </ContentContainer>
  );
};

export default Home;
