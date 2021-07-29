import React, { FC } from "react";

import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  topbar: {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    opacity: 1,
    backgroundColor: "#3f51b5",
    color: "white",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  },
}));

const TopBar: FC = () => {
  const classes = useStyles();

  return <Box className={classes.topbar}>Array Equilibrium Algorithm</Box>;
};

export default TopBar;
