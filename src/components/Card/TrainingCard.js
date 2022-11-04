import classes from "./TrainingCard.module.css";
const TrainingCard = (props) => {
  return (
    <section className={classes.page__contain}>
      <div className={classes.data__card}>
        <h3>HEADING</h3>
        <h4>MAY 18, 2022</h4>
        <p>
          International Conference on Transformative Education for Global
          Citizenship and Sustainable Development 2023
        </p>
        <div className={classes.btn__div}>
          <a href="https://google.com" className={classes.register}>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};
export default TrainingCard;
