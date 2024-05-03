import { Outlet } from "react-router-dom";
import BDFooter from "../components/BDFooter";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
      <BDFooter></BDFooter>
    </div>
  );
};

export default Main;
