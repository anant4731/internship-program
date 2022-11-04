import InsertChartIcon from "@mui/icons-material/InsertChart";
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FaceIcon from '@mui/icons-material/Face';
import Groups3Icon from '@mui/icons-material/Groups3';

import GeneralContainer from "../GeneralContainer/GeneralContainer";

import classes from "./Stats.module.css";
const Stats = (props) => {
  return (
    <GeneralContainer>
      <div>
        <h1>Our 2021 Data</h1>
        <h3>SubHeading</h3>
      </div>
      <div className={classes.container}>
        <div>
          <InsertChartIcon sx={{ fontSize: "100px", color: "#45a29e" }} />
          <h5>9+</h5>
          <h6>Initiatives</h6>
        </div>
        <div>
          <PublicIcon sx={{ fontSize: "100px", color: "#45a29e" }} />
          <h5>70+</h5>
          <h6>Countries</h6>
        </div>
        <div>
          <PeopleAltIcon sx={{ fontSize: "100px", color: "#45a29e" }} />
          <h5>20+</h5>
          <h6>Staff Nationalities</h6>
        </div>
        <div>
          <FaceIcon sx={{ fontSize: "100px", color: "#45a29e" }} />
          <h5>1243+</h5>
          <h6>Young people</h6>
        </div>
        <div>
          <Groups3Icon sx={{ fontSize: "100px", color: "#45a29e" }} />
          <h5>9384+</h5>
          <h6>Education Leaders</h6>
        </div>
      </div>
    </GeneralContainer>
  );
};
export default Stats;
