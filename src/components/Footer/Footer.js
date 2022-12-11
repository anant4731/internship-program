import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
import testLogo from '../../assets/images/testLogo.png'
import classes from "./Footer.module.css";
const Footer = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <GeneralContainer>
      <div className={classes.footer}>
        <div className={classes.form__and__logo}>
          <div>
            <img className={classes.logo} src={testLogo} alt="logos"/>
          </div>
          <div>
            <h4>CONTACT</h4>
            <div className={classes.contact_form}>
              <div>
                <input
                  placeholder="First Name"
                  className={classes.form__input}
                />
                <input
                  placeholder="Last Name"
                  className={classes.form__input}
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  className={classes.form__input__email}
                />
                <a className={classes.form__button} href={isLoggedIn ? '/' : '/auth'}>
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div>
            <h5>DISCOVER</h5>
            <Link to = "/">About the Foundation</Link>
            <Link to = "/">Secretariat</Link>
            <Link to = "/">GCED e-Campus</Link>
            <Link to = "/">Impact 500 Organizations</Link>
          </div>
          <div>
            <h5>DISCOVER</h5>
            <Link to = "/">About the Foundation</Link>
            <Link to = "/">Secretariat</Link>
            <Link to = "/">GCED e-Campus</Link>
            <Link to = "/">Impact 500 Organizations</Link>
          </div>
          <div>
            <h5>DISCOVER</h5>
            <Link to = "/">About the Foundation</Link>
            <Link to = "/">Secretariat</Link>
            <Link to = "/">GCED e-Campus</Link>
            <Link to = "/">Impact 500 Organizations</Link>
          </div>
          <div>
            <h5>DISCOVER</h5>
            <Link to = "/">About the Foundation</Link>
            <Link to = "/">Secretariat</Link>
            <Link to = "/">GCED e-Campus</Link>
            <Link to = "/">Impact 500 Organizations</Link>
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
