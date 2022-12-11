import classes from "./NavbarBottom.module.css";

import { Fragment, useState } from "react";
import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70vh",
  bgcolor: "#121210",
  border: "2px solid #000",
  color: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  zIndex: 10000,
  overflow: "scroll",
};

const NavbarBottom = (props) => {
  const [shrinkNav, setShrinkNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setShrinkNav(true);
    }
    if (window.scrollY < 100) {
      setShrinkNav(false);
    }
  });
  let cls =
    shrinkNav === true ? `${classes.nav__shrink}` : `${classes.nav__container}`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign={"center"}
              fontWeight={800}
            >
              WEBSITE NAME
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Accordion
                sx={{
                  position: "relative",
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  maxWidth: "500px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    home
                  </Typography>
                </AccordionSummary>
              </Accordion>

              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    About us
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <NavLink
                    onClick={handleClose}
                    style={{ margin: "0.5rem 0" }}
                    to={"/speakers"}
                  >
                    <Typography>Lorem ipsum</Typography>
                  </NavLink>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    What we do
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <NavLink
                    onClick={handleClose}
                    style={{ margin: "0.5rem 0" }}
                    to={"/speakers"}
                  >
                    <Typography>Lorem ipsum</Typography>
                  </NavLink>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    Events
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <NavLink
                    onClick={handleClose}
                    style={{ margin: "0.5rem 0" }}
                    to={"/speakers"}
                  >
                    <Typography>Lorem ipsum</Typography>
                  </NavLink>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    MAGAZINE
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <NavLink
                    onClick={handleClose}
                    style={{ margin: "0.5rem 0" }}
                    to={"/speakers"}
                  >
                    <Typography>Lorem ipsum</Typography>
                  </NavLink>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    get INVOLVED
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <NavLink
                    onClick={handleClose}
                    style={{ margin: "0.5rem 0" }}
                    to={"/speakers"}
                  >
                    <Typography>Lorem ipsum</Typography>
                  </NavLink>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  width: "200px",
                  margin: "4px 0",
                }}
              >
                <AccordionSummary
                  sx={{ width: "100%" }}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color={"white"} textAlign={"center"}>
                    Contact
                  </Typography>
                </AccordionSummary>
              </Accordion>
            </Box>
          </Box>
        </Modal>
      )}

      <div className={classes.nav}>
        <div onClick={handleOpen} className={classes.hamburger}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
        <ul className={classes.nav__links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
            <ul className={classes.submenu}>
              <li>
                <a href="/about/who-we-are">who we are</a>
              </li>
              <li>
                <a href="/about/secretariat">secretariat</a>
              </li>
              <li>
                <a href="/about/culture-of-practice">culture of practice</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">What we do</a>
            <ul className={classes.submenu}>
              <li>
                <a href="/">OUR projects</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Events</a>
            <ul className={classes.submenu}>
              <li>
                <a href="/">Conferences</a>
              </li>
              <li>
                <a href="/">Panel Discussions</a>
              </li>
              <li>
                <a href="/">Consultations</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">MAGAZINE</a>
            <ul className={classes.submenu}>
              <li>
                <a href="/">About the MAGAZINE</a>
              </li>
              <li>
                <a href="/">blog</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">reports</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">get INVOLVED</a>
            <ul className={classes.submenu}>
              <li>
                <a href="/">Intern with us</a>
              </li>
              <li>
                <a href="/">volunteer with us</a>
              </li>
              <li>
                <a href="/">youth board</a>
              </li>
              <li>
                <a href="/">Announcements</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavbarBottom;
