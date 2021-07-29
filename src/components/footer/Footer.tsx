import React, { FC } from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    color: "white",
    position: "fixed",
    bottom: 0,
  },
  footerCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
}));

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerCenter}>
        <Typography className={classes.text}>
          {`💻`} Made by Paulo Viana
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
