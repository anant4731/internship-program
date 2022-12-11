import GeneralContainer from "../GeneralContainer/GeneralContainer";
import SingleSponsor from "./SingleSponsor";

import testSponsor from '../../assets/images/projects.jpg'

import classes from "./SponsorsPartners.module.css";
const SponsorsPartners = (props) => {
  return (
    <GeneralContainer>
        <h1>Sponsors & Partners</h1>
      <div className={classes.container}>
        <div className={classes.small__container}>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
          <SingleSponsor img = {testSponsor}/>
        </div>
        
      </div>
    </GeneralContainer>
  );
};

export default SponsorsPartners;
