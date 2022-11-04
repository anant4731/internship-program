import GeneralContainer from "../GeneralContainer/GeneralContainer";
import classes from "./Parallax.module.css";
const Parallax = (props) => {
  return (
    <GeneralContainer>
      <div className={classes.container}></div>
    </GeneralContainer>
  );
};

export default Parallax;
