import { Grid, Box, IconButton } from "@mui/material";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import { theme } from "../themes/theme";

const styles = {
  root: {
    display: "grid",
    grid: "200px / 60px calc(100% - 120px) 60px",
    placeItems: "center",
  },
  contentWrap: {
    display: "flex",
    width: "100%",
    gap: 2,
    height: "100%",
    flexWrap: "wrap",
  },
};

const CardsFrame = (props) => {
  const { children, prev, next, disabled } = props;
  return (
    <Grid sx={styles.root}>
      <IconButton disabled={disabled === "prev"} onClick={prev} size="large">
        <ArrowCircleLeft />
      </IconButton>
      <Box sx={styles.contentWrap}>
        {Array.isArray(children) ? children.map((child) => child) : children}
      </Box>
      <IconButton size="large" disabled={disabled === "next"} onClick={next}>
        <ArrowCircleRight />
      </IconButton>
    </Grid>
  );
};

export default CardsFrame;
