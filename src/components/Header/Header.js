import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.bannerImage}>
          <div className={classes.content}>
            <h1>STUDY IN INDIA</h1>
            <Link to={'/'}>Apply Now</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
