import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./LoginSignup.module.css";
const LoginSignup = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const setLoginHandler = (e) => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setIsLogin(true);
  };

  const setSignupHandler = (e) => {
    // nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setIsLogin(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email);
    console.log(password);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-sc5oLNM9VNRmWQcK5ofuPDtRnquyoGM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-sc5oLNM9VNRmWQcK5ofuPDtRnquyoGM";
    }

    // validate

    // send to firebase
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToker: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Falied!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => alert(err.message));
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className={classes.container}>
      <div>
        <h2>WEBSITE NAME</h2>
        <div className={classes.btns}>
          <button onClick={setLoginHandler}>LOGIN</button>
          <button onClick={setSignupHandler}>SIGNUP</button>
        </div>
        <form onSubmit={formSubmitHandler} className={classes.form__container}>
          {!isLogin && (
            <div>
              <input ref={nameRef} required placeholder="Full Name *" />
            </div>
          )}
          <div>
            <input
              type={"email"}
              required
              ref={emailRef}
              placeholder="Email *"
            />
          </div>
          <div>
            <input
              required
              type={"password"}
              ref={passwordRef}
              placeholder="Password *"
            />
          </div>
          <button type={"submit"}>{isLogin ? "LOGIN" : "SIGNUP"}</button>
          {isLogin ? (
            <p onClick={setSignupHandler}>New member? Click here.</p>
          ) : (
            <p onClick={setLoginHandler}>Already a member? Click here.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
