import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.contentBx}>
          <h2 className={classes.heading}>{props.title}</h2>
          <div className={classes.content2}>
            <h3>{props.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
