import { Grid, Box, IconButton } from "@mui/material";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";

const styles = {
  root: {
    display: "grid",
    grid: "200px / 80px calc(100% - 160px) 80px",
    placeItems: "center",
    py: { xs: 3, sm: 6 },
  },
  contentWrap: {
    display: "flex",
    width: "100%",
    gap: 2,
    height: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

const CardsFrame = (props) => {
  const { children, prev, next, disabled } = props;
  return (
    <Grid sx={styles.root}>
      <IconButton disabled={disabled === "prev"} onClick={prev} size="large">
        <ArrowCircleLeft fontSize="large" color="secondary.dark" />
      </IconButton>
      <Box sx={styles.contentWrap}>
        {Array.isArray(children) ? children.map((child) => child) : children}
      </Box>
      <IconButton size="large" disabled={disabled === "next"} onClick={next}>
        <ArrowCircleRight fontSize="large" color="secondary.dark" />
      </IconButton>
    </Grid>
  );
};

export default CardsFrame;
