import { Grid, Box, IconButton } from "@mui/material";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";

const styles = {
  root: {
    display: "grid",
    grid: "1fr / 60px 1fr 60px",
  },
};

const CardsFrame = (props) => {
  const { children, prev, next, disabled } = props;
  return (
    <Grid sx={styles.root}>
      <IconButton disabled={disabled === "prev"} onClick={prev} size="large">
        <ArrowCircleLeft />
      </IconButton>
      <Box>
        {Array.isArray(children) ? children.map((child) => child) : children}
      </Box>
      <IconButton size="large" disabled={disabled === "next"} onClick={next}>
        <ArrowCircleRight />
      </IconButton>
    </Grid>
  );
};

export default CardsFrame;
