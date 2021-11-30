import Card from "@mui/material/Card";
import { CardHeader, CardContent } from "@mui/material";
import Temperature from "./Temperature";

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
      <CardContent>
        {JSON.stringify(data)}
        <Temperature>272.15</Temperature>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
