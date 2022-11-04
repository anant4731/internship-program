import classes from "./NavbarBottom.module.css";
const NavbarBottom = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.nav__container}>
        <div className={classes.nav__group}>
          <a href="/">HOME</a>
          <a href="/">ABOUT US</a>
          <a href="/">WHAT WE DO</a>
          <a href="/">EVENTS</a>
          <a href="/">MAGAZINE</a>
          <a href="/">GET INVOLVED</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
