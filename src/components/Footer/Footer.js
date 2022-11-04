import { Link } from "react-router-dom";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
import classes from "./Footer.module.css";
const Footer = (props) => {
  return (
    <GeneralContainer>
      <div className={classes.footer}>
        <h4>NAME</h4>
        <div className={classes.container}>
          <div>
            <h5>DISCOVER</h5>
            <Link>About the Foundation</Link>
            <Link>Secretariat</Link>
            <Link>GCED e-Campus</Link>
            <Link>Impact 500 Organizations</Link>
          </div>
          <div>
            <h5>DISCOVER</h5>
            <Link>About the Foundation</Link>
            <Link>Secretariat</Link>
            <Link>GCED e-Campus</Link>
            <Link>Impact 500 Organizations</Link>
          </div>
          <div>
            <h5>DISCOVER</h5>
            <Link>About the Foundation</Link>
            <Link>Secretariat</Link>
            <Link>GCED e-Campus</Link>
            <Link>Impact 500 Organizations</Link>
          </div>
          <div>
            <h5>DISCOVER</h5>
            <Link>About the Foundation</Link>
            <Link>Secretariat</Link>
            <Link>GCED e-Campus</Link>
            <Link>Impact 500 Organizations</Link>
          </div>
        </div>
        <div className={classes.lastline}>
          <h5>© 2022, Startup Story Private Limited. All rights reserved</h5>
        </div>
      </div>
    </GeneralContainer>
  );
};

export default Footer;
