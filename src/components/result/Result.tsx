import React, { FC } from "react";
import Alert from "@material-ui/lab/Alert";

interface Props {
  error: string;
  result: number | undefined;
}

const Result: FC<Props> = ({ error, result }) => {
  const getAlertStatus = () => {
    if (error) {
      return "error";
    }

    if (result === -1) {
      return "info";
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
      return "Your array doesn't have an equilibrium point";
    } else if (result || result === 0) {
      return `The equilibrium point is at position ${result}`;
    }
  };

  return error || result || result === 0 ? (
    <Alert severity={getAlertStatus()}>{getAlertMessage()}</Alert>
  ) : null;
};

export default Result;
