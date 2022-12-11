import classes from "./TrainingCard.module.css";

const TrainingCard = (props) => {
  return (
    <section className={classes.page__contain}>
      <div className={classes.data__card}>
        <img alt="testImage" src={props.img} />
        <p>{props.description}</p>
        <div>
          <h3>{props.title}</h3>
          <h4>{props.date}</h4>
        </div>
      </div>
    </section>
  );
};
export default TrainingCard;

// import classes from "./TrainingCard.module.css";
// const TrainingCard = (props) => {
//   return (
//     <section className={classes.page__contain}>
//       <div className={classes.data__card}>
//         <img src={props.img}/>
//         <p>{props.description}</p>
//       </div>
//     </section>
//   );
// };
// export default TrainingCard;
