import classes from "./Focus.module.css";
import Card from "../Card/Card";
import GeneralContainer from "../GeneralContainer/GeneralContainer";
const FOCUS_DATA = [
  {
    title: "Global Citizenship Education",
    description:
      "We are one of the pioneering international organizations established with a mandate to advance United Nations' Sustainable Development Goal 4.7, that is, Global Citizenship Education.",
  },
  {
    title: "Education for Sustainable Development",
    description:
      "We empower educators and young people to advance sustainable development goals within the school communities and beyond.",
  },
  {
    title: "Social-Emotional Learning",
    description:
      "We design and co-create programs for educators , learners, and youth to advance social and emotional skills for human flourishing.",
  },
  {
    title: "Education for Anti-Racism and Inter-cultural Understanding",
    description:
      "We advance formal and non-formal education initiatives  for educators and learners to foster anti-racism and intercultural understanding encouraging participants to celebrate diversity and practice inclusion within and beyond the classrooms and communities.",
  },
  {
    title: "Holocaust and Genocide Education",
    description:
      "The Holocaust was a defining point in history and its lessons have much to teach about the danger of extremism and the prevention of genocide today. Our interventions are designed to create awareness and education for a better future.",
  },
  {
    title: "Peace and Human Rights Education",
    description:
      "We design and co-create programs for educators and learners to advance social and emotional skills for human flourishing.",
  },
];
const Focus = (props) => {
  return (
    <GeneralContainer>
      <div>
        <h1>Areas of Focus</h1>
      </div>
      <div className={classes.container}>
        {/* <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
        {FOCUS_DATA.map((card) => {
          return <Card key={Math.random()} title={card.title} description={card.description} />;
        })}
      </div>
    </GeneralContainer>
  );
};

export default Focus;
