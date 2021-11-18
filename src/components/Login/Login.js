import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid,setEmailIsValid]= useState(true);
  const [passIsValid,setPassIsValid]= useState(true);
  const [formIsValid,setFormIsValid]=useState(false);


  useEffect(()=>{ 
    console.log('useEffect2');
    const timeOutEffect = setTimeout(()=>{
      if(enteredEmail.includes('@') && enteredPassword.trim().length >6) {
        setFormIsValid(true)
      }
    },500);
    return ()=>{
      console.log('cleanup2')
      clearTimeout(timeOutEffect)
    }
  },[enteredEmail,enteredPassword])

  const emaileHandler =(event)=>{
    setEnteredEmail(event.target.value);    
  }

  const passwordHandler = (event)=>{
    setEnteredPassword(event.target.value);
    
  }


  const loginHandler =(event)=>{
    event.preventDefault();
    console.log(enteredEmail,enteredPassword);
    props.login(true)

  }

  const validateEmailHandler = () =>{
      setEmailIsValid(enteredEmail.includes('@'))
  }

  const validatePasswordHandler = () =>{
    setPassIsValid(enteredPassword.trim().length>6)
  }


  return (
    <Card className={classes.login}>
      <form onSubmit={loginHandler}> 
        <div className={`${classes.control} ${!emailIsValid ? classes.invalid :''}`} >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={enteredEmail} onChange={emaileHandler} onBlur={validateEmailHandler}/>
        </div>
        <div className={`${classes.control} ${!passIsValid ? classes.invalid :''}`} >
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={enteredPassword} onChange={passwordHandler} onBlur={validatePasswordHandler}/>
        </div>
        <Button type="submit" className={classes.btn} disabled= {!formIsValid}>
          login
        </Button>
      </form>
    </Card>
  );
};
export default Login;
