import { useState, useEffect } from "react";
import "./App.css";
import weatherService from "./services/weather.service";
import Loading from "./components/Loading";
import WeatherInfo from "./components/WeatherInfo";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";
import { DataProvider } from "./context/DataContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weatherService.get().then((result) => setWeatherData(result.list));
  }, []);

  console.log(weatherData);

  return (
    <ThemeProvider theme={theme}>
      <DataProvider value={weatherData}>
        <div className="App">{weatherData ? <WeatherInfo /> : <Loading />}</div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
