import React, { FC, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import getApi from "../../api/api";
import Result from "../../components/result/Result";
import Explanation from "../../components/explanation/Explanation";

interface FormProps {
  arrayContent: string;
}

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    alignSelf: "center",
    marginTop: 64,
    marginBottom: 64,
  },
  wrapper: {
    justifyContent: "center",
    margin: 1,
    position: "relative",
  },
}));

const MainPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<number>();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (values: FormProps) => {
    setLoading(true);
    try {
      const arr = JSON.parse(values.arrayContent);
      const response = await getApi({ arr });

      setResult(response.index);
      setError("");
    } catch (error) {
      const errorMessage: string =
        error?.response?.data?.error || "An unexpected error happened";

      setError(errorMessage);
      setResult(undefined);
    } finally {
      setLoading(false);
    }
  };
  const classes = useStyles();

  const validateForm = (values: FormProps) => {
    const errors: any = {};

    try {
      const array = JSON.parse(values.arrayContent);

      if (array.some(isNaN)) {
        errors.arrayContent = "Please, insert only numbers";
      }
    } catch (e) {
      errors.arrayContent = "Please, insert an valid array.";
    } finally {
      return errors;
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Box marginBottom={4}>
          <Box marginBottom={4}>
            <Typography variant="h5">
              With this amazing tool you can check out if an array has an
              equilibrium index. Try it now!
            </Typography>
          </Box>
          <Form<FormProps>
            validate={validateForm}
            validateOnBlur
            onSubmit={handleSubmit}
            render={({ handleSubmit, form }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Box marginBottom={4}>
                    <Field
                      name="arrayContent"
                      render={({ input, meta }) => (
                        <TextField
                          {...input}
                          label="Array"
                          disabled={loading}
                          error={meta.error && meta.touched}
                          helperText={
                            meta.error && meta.touched ? meta.error : null
                          }
                          multiline
                          placeholder="[1,2,3,4,6]"
                          rows={4}
                          size="medium"
                          variant="outlined"
                        />
                      )}
                    />
                  </Box>
                  <Box className={classes.wrapper}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      onClick={form.submit}
                    >
                      {loading ? "Loading" : "Try it"}
                    </Button>
                  </Box>
                </form>
              );
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Result result={result} error={error} />
        </Box>
        <Explanation />
      </Grid>
    </Grid>
  );
};

export default MainPage;
