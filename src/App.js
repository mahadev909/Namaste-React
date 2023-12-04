import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
