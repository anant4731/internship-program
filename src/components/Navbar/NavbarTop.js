import { useContext, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";

import classes from "./NavbarTop.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import Logo from '../../assets/images/testLogo.png'

const NavbarTop = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = (e) => {
    authCtx.logout();
  };

  const [shrinkNav, setShrinkNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setShrinkNav(true);
    }
    if (window.scrollY < 100) {
      setShrinkNav(false);
    }
  });

  let cls =
    shrinkNav === true
      ? `${classes.nav__shrink} ${classes.nav__container}`
      : `${classes.nav__container}`;
  return (
    <div className={classes.container}>
      <div className={cls}>
        <div className={classes.nav__group}>
          <Link to="/contact">
            <div>
              <MailIcon />
              {!shrinkNav && <p>connect</p>}
            </div>
          </Link>
          <Link to="/">
            <div>
              <NoteAltIcon />
              {!shrinkNav && <p>apply</p>}
            </div>
          </Link>
        </div>
        <div className={classes.nav__group}>
          <Link className={classes.logo} to="/">
            <img className={classes.logo__img} alt="logo" src={Logo}/>
          </Link>
        </div>
        <div className={classes.nav__group}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://razorpay.com/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearchBrand-Prospect-Dweb-Core&utm_adgroup=brandsearch_core_exact&utm_content=responsive&utm_term=razorpay&utm_gclid=EAIaIQobChMIwMLgxoyt-wIVTTsrCh1-CwsXEAAYASAAEgJJ-_D_BwE&utm_campaignID=400139470&utm_adgroupID=27293859910&utm_adID=600098996154&utm_network=g&utm_device=c&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=9302104&gclid=EAIaIQobChMIwMLgxoyt-wIVTTsrCh1-CwsXEAAYASAAEgJJ-_D_BwE"
          >
            <div>
              <FavoriteIcon />
              {!shrinkNav && <p>donate</p>}
            </div>
          </a>
          {!authCtx.isLoggedIn ? (
            <Link to="/auth">
              <div>
                <AccountCircleIcon />
                {!shrinkNav && <p>login</p>}
              </div>
            </Link>
          ) : (
            <Link to="/">
              <div onClick={logoutHandler}>
                <LogoutIcon />
                {!shrinkNav && <p>logout</p>}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
