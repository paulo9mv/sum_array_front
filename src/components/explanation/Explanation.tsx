import React, { FC } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  bold: {
    fontWeight: "bold",
  },
}));

const Explanation: FC = () => {
  const classes = useStyles();

  return (
    <Box marginTop={4} marginLeft={1} marginRight={1}>
      <Box marginBottom={2}>
        <Typography variant="h2">How is it done?</Typography>
      </Box>
      <Alert icon={false} severity="info" style={{ justifyContent: "center" }}>
        <Typography>First, we sum all the elements of the array</Typography>
        <Typography>Secondly, we start an paralel sum starting at 0</Typography>
        <Typography>
          Now, starting from the beginning, we iterate each element of the array
        </Typography>
        <Typography>
          The element is subtracted from the total sum and the result is checked
          if equal to paralel sum
        </Typography>
        <Typography className={classes.bold}>
          If they are equal, we did it! The current position is the equilibrium
          index.
        </Typography>
        <Typography>
          Otherwise, we add the element to the paralel sum and iterate to the
          next element, until an index is found. The total sum will decrease in
          each iteration.
        </Typography>
        <Typography className={classes.bold}>
          If the array is over, there's no equilibrium index.
        </Typography>
      </Alert>
    </Box>
  );
};

export default Explanation;
