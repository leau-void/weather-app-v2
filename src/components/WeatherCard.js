import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const styles = {
  root: {
    width: "250px",
    height: "100%",
    flexShrink: 0,
  },
};

const WeatherCard = (props) => {
  const { data } = props;
  return (
    <Card sx={styles.root} variant="outlined">
      <CardContent>{JSON.stringify(data)}</CardContent>
    </Card>
  );
};

export default WeatherCard;
