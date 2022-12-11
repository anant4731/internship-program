import classes from "./InitiativeCard.module.css";
const InitiativeCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <img src={props.img} alt="project" />
      </div>
      <div className={classes.content}>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default InitiativeCard;
