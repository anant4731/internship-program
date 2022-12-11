import { Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import classes from "./Contact.module.css";
const Contact = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const nameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const organisationChangeHandler = (e) => {
    setOrganisation(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setMessage(+e.target.value);
  };

  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   console.log(form.current);
  //   emailjs
  //     .sendForm(
  //       "service_8hi1yb8",
  //       "template_y5urw1r",
  //       form.current,
  //       "PzHpBSFIyVOwTnNG-"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   setEmail("");
  //   setMessage("");
  //   setUsername("");
  //   setOrganisation("");
  //   setPhone("");
  // };

  return (
    <Container
      sx={{ textAlign: "center", minHeight: "100vh", paddingTop: "10rem" }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        color="black"
        fontFamily="monospace"
        sx={{ borderBottom: "2px solid #d7d7d7" }}
      >
        GET IN TOUCH
      </Typography>
      <Typography variant="h6">Phone: +91 6200329534</Typography>
      <Typography variant="h6" color={"red"}>
        Email: startupstorymedia@gmail.com
      </Typography>
      <Typography variant="h6" mb={5}>
        Address: Startup Story, Regal Building, Innov8 Coworking, 69, Connaught
        Place, New Delhi, Delhi 110001
      </Typography>
      <form>
        <div className={classes.contact__form}>
          <div className={classes.input1}>
            <div className={classes.input}>
              <TextField
                required
                onChange={nameChangeHandler}
                variant="filled"
                label="Name"
                name="user_name"
                value={username}
                id="name"
                sx={{ width: "80%" }}
              ></TextField>
            </div>
            <div className={classes.input}>
              <TextField
                required
                variant="filled"
                onChange={emailChangeHandler}
                label="Email"
                name="user_email"
                value={email}
                id="email"
                sx={{ width: "80%" }}
              ></TextField>
            </div>
            <div className={classes.input}>
              <TextField
                variant="filled"
                label="Phone No."
                id="phone"
                onChange={phoneChangeHandler}
                value={phone}
                name="phone"
                sx={{ width: "80%" }}
              ></TextField>
            </div>
            <div className={classes.input}>
              <TextField
                required
                variant="filled"
                label="Organisation Name"
                id="organisation"
                onChange={organisationChangeHandler}
                value={organisation}
                name="organisation"
                sx={{ width: "80%" }}
              ></TextField>
            </div>
          </div>
          <div className={classes.input2}>
            <TextField
              required
              variant="filled"
              label="Message"
              name="message"
              onChange={messageChangeHandler}
              value={message}
              id="message"
              rows={11}
              sx={{width:'80%'}}
              multiline
            ></TextField>
          </div>
        </div>
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ color: "white", backgroundColor: "red", marginTop:'10px'}}
        >
          Send Message
        </Button>
      </form>
    </Container>
  );
};
export default Contact;
