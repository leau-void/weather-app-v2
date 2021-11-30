import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Loading = (props) => {
  return (
    <Box sx={styles.root}>
      <CircularProgress size="min(30vw,30vh)" />
    </Box>
  );
};

export default Loading;
