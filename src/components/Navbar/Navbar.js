import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
};
export default Navbar;