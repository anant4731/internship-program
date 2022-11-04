import InitiativeCard from "../Card/InitiativeCard";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
import classes from "./Initiative.module.css";
const Initiative = (props) => {
  return (
    <GeneralContainer>
      <div>
        <h1>Our Initiatives</h1>
        <h3>SubHeading</h3>
      </div>
      <div className={classes.container}>
        <InitiativeCard />
        <InitiativeCard />
        <InitiativeCard />
        <InitiativeCard />
      </div>
    </GeneralContainer>
  );
};

export default Initiative;
