import InitiativeCard from "../Card/InitiativeCard";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
import intiImg1 from "../../assets/images/init1.jpg";
import intiImg2 from "../../assets/images/init2.jpg";
import intiImg3 from "../../assets/images/init3.jpg";
import intiImg4 from "../../assets/images/init4.jpg";
import classes from "./Initiative.module.css";

const INITIATIVE_DATA = [
  {
    title: "Projects",
    description:
      "Explore our Projets and Initiatives for education leaders and youth.",
    img: intiImg1,
  },
  {
    title: "Global Citizenship Schools",
    description:
      "Learn more about our fully-funded initiative for K-12 Schools in partnership with UNESCO MGIEP.",
    img: intiImg2,
  },
  {
    title: "GCED e-Campus",
    description:
      "Visit our virtual education platform for education leaders and educators.",
    img: intiImg3,
  },
  {
    title: "Impact 500",
    description:
      "Explore the world leading organizations transforming education for human and planetary flourishing.",
    img: intiImg4,
  },
];

const Initiative = (props) => {
  return (
    <GeneralContainer>
      <div>
        <h1>Our Initiatives</h1>
      </div>
      <div className={classes.container}>
        {INITIATIVE_DATA.map((card) => {
          return (
            <InitiativeCard
              key={Math.random()}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          );
        })}
      </div>
    </GeneralContainer>
  );
};

export default Initiative;
