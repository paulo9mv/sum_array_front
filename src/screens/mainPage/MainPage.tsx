import React, { FC, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Form, Field } from "react-final-form";
import getApi from "../../api/api";
import Result from "../../components/result/Result";

interface FormProps {
  arrayContent: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
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

      console.log(response);

      setResult(response.index);
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
      <Box>
        <Typography>
          With this amazing tool you can check out if an array has an
          equilibrium point. Try it now!
        </Typography>
        <Form<FormProps>
          validate={validateForm}
          validateOnBlur
          onSubmit={handleSubmit}
          render={({ handleSubmit, form }) => {
            return (
              <form onSubmit={handleSubmit}>
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
                      rows={4}
                      size="medium"
                      variant="outlined"
                    />
                  )}
                />

                <Button disabled={loading} onClick={form.submit}>
                  Submit
                </Button>
                {loading && <CircularProgress />}
              </form>
            );
          }}
        />
      </Box>
      <Result result={result} error={error} />
    </Grid>
  );
};

export default MainPage;
