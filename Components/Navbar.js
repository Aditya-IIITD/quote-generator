import { Outlet } from "react-router-dom";
import style from "../Styles/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={style.container}>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1 className={style.bookmark}>
          <Link to="bookmarks">Bookmarks</Link>
        </h1>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
