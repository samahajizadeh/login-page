import React, { useContext, useEffect, useReducer, useState } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {

  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState(true);
  // const [passIsValid, setPassIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  

  // const [state,dispatchFn] = useReducer(reducerFn,initialSt,initFn)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const {isValid:emailIsValid} = emailState;
  const {isValid:passwordIsValid} = passwordState;

  useEffect(() => {
    console.log("useEffect2");
    const timeOutEffect = setTimeout(() => {
        // setFormIsValid(emailState.isValid && passwordState.isValid);
        setFormIsValid(emailIsValid && passwordIsValid);

    }, 500);
    return () => {
      console.log("cleanup2");
      clearTimeout(timeOutEffect);
    };
  }, [emailIsValid, passwordIsValid]);
  // }, [emailState, passwordState]);

 
  const emaileHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );

    // setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);

    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    // setEnteredPassword(event.target.value);
  };

  const auth = useContext(AuthContext)
  const loginHandler = (event) => {
    event.preventDefault();
    // console.log(emailState.value, enteredPassword);
    auth.loginHandler(emailState.value, passwordState.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
    // setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    // setPassIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={loginHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false  ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emaileHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <Button type="submit" className={classes.btn} disabled={!formIsValid}>
          login
        </Button>
      </form>
    </Card>
  );
};
export default Login;
