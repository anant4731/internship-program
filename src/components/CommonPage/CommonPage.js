import Parallax from "../Parallax/Parallax";
import classes from "./CommonPage.module.css";

import testImg from "../../assets/images/projects.jpg";

const CommonPage = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>{props.mainHeading}</h1>
        <p>{props.mainDescription}</p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.subheading}>{props.secondHeading}</h2>
        <p>
          The Global Citizenship Foundation provides strategic support to
          individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations.
        </p>
      </div>
      <Parallax />
      <h2 className={classes.subheading}>ANOTHER HEADING</h2>
      <div className={classes.card__container}>
        <div className={classes.card}>
          <h4>Mandate</h4>
          <p>
            The Global Citizenship Foundation, in Delhi National Capital Region,
            India, was established as an independent, apolitical, and
            non-partisan organization with the mandate to achieve the United
            Nations
          </p>
        </div>
        <div className={classes.card}>
          <h4>Mandate</h4>
          <p>
            The Global Citizenship Foundation, in Delhi National Capital Region,
            India, was established as an independent, apolitical, and
            non-partisan organization with the mandate to achieve the United
            Nations’
          </p>
        </div>
      </div>
      <h2 className={classes.subheading}>ANOTHER HEADING</h2>
      <div className={classes.card__container}>
        <div className={classes.img__card}>
          <div className={classes.img__card__header}>
            <img src={testImg} alt="rover" />
          </div>
          <div className={classes.img__card__body}>
            <h4>HEADING</h4>
            <p>
              The Global Citizenship Foundation, in Delhi National Capital
              Region, India, was established as an independent, apolitical, and
              non-partisan
            </p>
          </div>
        </div>
        <div className={classes.img__card}>
          <div className={classes.img__card__header}>
            <img src={testImg} alt="rover" />
          </div>
          <div className={classes.img__card__body}>
            <h4>HEADING</h4>
            <p>
              The Global Citizenship Foundation, in Delhi National Capital
              Region, India, was established as an independent, apolitical, and
              non-partisan
            </p>
          </div>
        </div>
        <div className={classes.img__card}>
          <div className={classes.img__card__header}>
            <img src={testImg} alt="rover" />
          </div>
          <div className={classes.img__card__body}>
            <h4>HEADING</h4>
            <p>
              The Global Citizenship Foundation, in Delhi National Capital
              Region, India, was established as an independent, apolitical, and
              non-partisan
            </p>
          </div>
        </div>
        <div className={classes.img__card}>
          <div className={classes.img__card__header}>
            <img src={testImg} alt="rover" />
          </div>
          <div className={classes.img__card__body}>
            <h4>HEADING</h4>
            <p>
              The Global Citizenship Foundation, in Delhi National Capital
              Region, India, was established as an independent, apolitical, and
              non-partisan
            </p>
          </div>
        </div>
      </div>
      <Parallax />
      <div className={classes.content}>
        <h2 className={classes.subheading}>
          What is Global Citizenship Education?
        </h2>
        <p>
          The Global Citizenship Foundation provides strategic support to
          individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations. The Global Citizenship Foundation provides strategic support
          to individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations.
        </p>
        <p>
          The Global Citizenship Foundation provides strategic support to
          individuals, institutions, and organizations to help achieve our
          mandate in line with Education 2030, as envisioned by the United
          Nations.
        </p>
      </div>
    </div>
  );
};

export default CommonPage;
