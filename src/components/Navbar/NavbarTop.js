import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import classes from "./NavbarTop.module.css";
const NavbarTop = (props) => {
  const [shrinkNav, setShrinkNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setShrinkNav(true);
    }
    if (window.scrollY < 100) {
      setShrinkNav(false);
    }
  });

  let cls = shrinkNav === true ? `${classes.nav__shrink}` : `${classes.nav__container}`;
  return (
    <div className={classes.container}>
      <div className={cls}>
        <div className={classes.nav__group}>
          <a href="/">
            <div>
              <LoginIcon />
              {!shrinkNav && <p>login</p>}
            </div>
          </a>
          <a href="/">
            <div>
              <NoteAltIcon />
              {!shrinkNav && <p>apply</p>}
            </div>
          </a>
        </div>
        <div className={classes.nav__group}>
          <a href="/">WEBSITE NAME</a>
        </div>
        <div className={classes.nav__group}>
          <a href="/">
            <div>
              <MailIcon />
              {!shrinkNav && <p>connect</p>}
            </div>
          </a>
          <a href="/">
            <div>
              <FavoriteBorderIcon />
              {!shrinkNav && <p>donate</p>}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
