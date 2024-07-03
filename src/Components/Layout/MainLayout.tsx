import { useState } from "react";
import Sidebar from "./Sidebar";
import { Header } from "../UI";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

const MainLayout = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    window.screen.availWidth < 1200 && setActive(!active);
  };
  return (
    <main className="primary-layout">
      <Sidebar active={active} handleActive={handleActive} />
      <div className="primary-layout__inner">
        <Header active={active} handleActive={handleActive} />
        <div className="primary-layout__wrapper">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
