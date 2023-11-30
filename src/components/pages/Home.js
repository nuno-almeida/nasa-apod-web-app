import APODContainer from "../utils/APODContainer";
import useQuery, { QueryType } from "../../hooks/useQuery";

const Home = () => {
  const { isLoading, error, data } = useQuery({ type: QueryType.Random });

  return <APODContainer isLoading={isLoading} error={error} data={data} />;
};

export default Home;
