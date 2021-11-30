import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const ErrorPage = (props) => {
  const { error } = props;

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <Box sx={styles.root}>
      <Typography variant="h1">
        There was an error while fetching the weather data. Open your console to
        consult the error.
      </Typography>
    </Box>
  );
};

export default ErrorPage;
