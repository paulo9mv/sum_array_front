import React, { FC } from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";
interface Props {
  error: string;
  result: number | undefined;
}

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 400,
  },
}));

const Result: FC<Props> = ({ error, result }) => {
  const classes = useStyles();

  const getAlertStatus = () => {
    if (error) {
      return "error";
    }

    if (result === -1) {
      return "warning";
    } else if (result || result === 0) {
      return "success";
    }
  };

  const getAlertMessage = () => {
    if (error) {
      return `Oops! Something wrong happened.
      Error status: ${error}`;
    }

    if (result === -1) {
      return "Your array doesn't have an equilibrium index";
    } else if (result || result === 0) {
      return `The equilibrium index is at position ${result}`;
    }
  };

  return error || result || result === 0 ? (
    <Alert className={classes.container} severity={getAlertStatus()}>
      {getAlertMessage()}
    </Alert>
  ) : null;
};

export default Result;
