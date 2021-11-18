import React from "react";
import Card from "../UI/Card";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Card className={classes.main}>
      <h1>Welcome</h1>
    </Card>
  );
};

export default Home;
