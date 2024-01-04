import { Outlet } from "react-router-dom";
import style from "../Styles/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={style.container}>
        <h1>Home</h1>
        <h1 className={style.bookmark}>Bookmarks</h1>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
