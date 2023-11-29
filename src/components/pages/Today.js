import APODContainer from "../utils/APODContainer";
import useQuery, { QueryType } from "../../hooks/useQuery";

const Today = () => {
  const { isLoading, error, image } = useQuery({
    type: QueryType.ByDate,
    date: new Date().toISOString().split("T")[0],
  });

  return <APODContainer isLoading={isLoading} error={error} image={image} />;
};

export default Today;