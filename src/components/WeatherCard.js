import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import Temperature from "./Temperature";
import formatDate from "../utils/formatDate";

const styles = {
  root: {
    width: "250px",
    height: "100%",
    flexShrink: 0,
  },
};

const WeatherCard = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography>Temperature</Typography>
        <Temperature>{data.main.temp}</Temperature>
        <img
          src={
            "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
          }
          alt={data.weather[0].description}
        />
        <Typography>{formatDate(data.dt_txt)}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
