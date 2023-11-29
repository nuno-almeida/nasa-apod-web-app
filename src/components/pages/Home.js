import APODContainer from "../utils/APODContainer";
import useQuery, { QueryType } from "../../hooks/useQuery";

const Home = () => {
  const { isLoading, error, image } = useQuery({ type: QueryType.Random });

  return <APODContainer isLoading={isLoading} error={error} image={image} />;
};

export default Home;
