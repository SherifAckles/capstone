import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CapstoneLogo } from "../../../assets/crown.svg"
import "./navigation.styles.scss"
const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CapstoneLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
