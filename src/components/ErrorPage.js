import { Grid, Box, Button, Typography, Icon, Card } from "@mui/material";
import { useEffect } from "react";
import { theme } from "../themes/theme";
import Error from "@mui/icons-material/Error";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "lightgrey",
  },
  content: {
    maxWidth: "80%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    alignItems: "center",
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 2),
    },
  },
  icon: {
    fontSize: "4rem",
  },
  text: {
    lineHeight: "2.5rem",
  },
};

const ErrorPage = (props) => {
  const { error, refreshData } = props;

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <Grid container sx={styles.root}>
      <Card variant="outlined" elevation sx={styles.content}>
        <Icon sx={styles.icon}>
          <Error sx={{ fontSize: "inherit" }} color="error" />
        </Icon>
        <Typography sx={styles.text} variant="h1">
          There was an error while fetching the weather data. <br /> Open your
          console to consult the error.
        </Typography>
        <Button onClick={refreshData} variant="contained" size="large">
          Try again
        </Button>
      </Card>
    </Grid>
  );
};

export default ErrorPage;
