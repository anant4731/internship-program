import classes from "./Focus.module.css";
import Card from "../Card/Card";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
const Focus = (props) => {
  return (
    <GeneralContainer>
        <div>
            <h1>Areas of Focus</h1>
            <h3>SubHeading</h3>
        </div>
      <div className={classes.container}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </GeneralContainer>
  );
};

export default Focus;
