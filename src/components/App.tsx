import { NavLink, Outlet } from "react-router-dom";
import * as styles from "./App.module.scss";
import t1000 from "@/assets/images/Robert_Patrick.jpg";

const App = () => {
  return (
    <div className={styles.appDiv}>
      <NavLink to={"/page1"} className={styles.nav}>
        Page1
      </NavLink>
      <NavLink to={"/page2"} className={styles.nav}>
        Page2
      </NavLink>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <img src={t1000} alt="Robert Patrick" />
      <Outlet />
    </div>
  );
};

export default App;
