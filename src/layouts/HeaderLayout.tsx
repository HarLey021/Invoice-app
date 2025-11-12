import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const HeaderLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderLayout;
