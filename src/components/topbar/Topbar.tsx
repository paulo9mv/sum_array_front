import React, { FC } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  topbar: {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "antiquewhite",
    border: "1px solid rgba(0, 0, 0, 1)",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  },
}));

const TopBar: FC = () => {
  const classes = useStyles();

  return <div className={classes.topbar}>Array Equilibrium Algorithm</div>;
};

export default TopBar;
