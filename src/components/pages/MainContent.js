import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const MainContent = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainContent;
