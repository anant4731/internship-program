import classes from "./SingleSponsor.module.css";
const SingleSponsor = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img src={props.img} alt="sponsors" />
      </div>
    </div>
  );
};

export default SingleSponsor;
