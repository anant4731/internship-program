import TrainingCard from "../Card/TrainingCard";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
import cardImg1 from "../../assets/images/training1.png";
import cardImg2 from "../../assets/images/training2.jpg";
import cardImg3 from "../../assets/images/training3.jpg";
import cardImg4 from "../../assets/images/training4.png";

import classes from "./Training.module.css";

const TRAINING_DATA = [
  {
    img: cardImg1,
    title: "CONFERENCE",
    date: "MAY 18, 2022",
    description:
      "International Conference on Transformative Education for Global Citizenship and Sustainable Development 2024",
  },
  {
    img: cardImg2,
    title: "CONFERENCE 2",
    date: "MAY 22, 2022",
    description:
      "How can we ensure Meaningful Change through Education for Sustainable Development? | 21st Educational Leadership Forum",
  },
  {
    img: cardImg3,
    title: "CONFERENCE 3",
    date: "MAY 22, 2022",
    description:
      "Celebrating Gender Inclusive Learning Spaces: Unpacking the Secrets to Gender-Inclusive Learning Spaces | 19th Educational Leadership Forum",
  },
  {
    img: cardImg4,
    title: "CONFERENCE 4",
    date: "MAY 22, 2022",
    description:
      "International Conference on Transformative Education for Global Citizenship and Sustainable Development 2022",
  },
];

const Training = (props) => {
  return (
    <GeneralContainer>
      <div>
        <h1>Events & Training</h1>
      </div>
      <div className={classes.container}>
        {/* <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard /> */}
        {TRAINING_DATA.map((card) => {
          return (
            <TrainingCard
              key={Math.random()}
              img={card.img}
              title={card.title}
              date={card.date}
              description={card.description}
            />
          );
        })}
      </div>
    </GeneralContainer>
  );
};

export default Training;
