import TrainingCard from "../Card/TrainingCard";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
import classes from "./Training.module.css";
const Training = (props) => {
  return (
    <GeneralContainer>
      <div>
        <h1>Events & Training</h1>
        <h3>SubHeading</h3>
      </div>
      <div className={classes.container}>
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
      </div>
    </GeneralContainer>
  );
};

export default Training;
