import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function AppLayout() {
  return (
    <Provider store={appStore}>
      <div className="main-layout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default AppLayout;
