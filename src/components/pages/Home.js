import { useContext } from "react";
import APODContainer from "../utils/APODContainer";
import useQuery, { QueryType } from "../../hooks/useQuery";
import AuthContext from "../../contexts/AuthContext";

const Home = () => {
  const { isAuth } = useContext(AuthContext); 
  const { isLoading, error, data, allItems } = useQuery({ type: QueryType.Random });

  return <APODContainer isLoading={isLoading} error={error} data={isAuth ? allItems : data} />;
};

export default Home;