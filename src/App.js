import { useState, useEffect, useCallback } from "react";
import "./App.css";
import weatherService from "./services/weather.service";
import Loading from "./components/Loading";
import WeatherInfo from "./components/WeatherInfo";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";
import { DataProvider } from "./context/DataContext";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentError, setCurrentError] = useState(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    weatherService
      .get()
      .then((result) => setWeatherData(result.list))
      .catch((error) => setCurrentError(error));
  }, [refresh]);

  const refreshData = useCallback(() => {
    setWeatherData(null);
    setRefresh((prev) => prev + 1);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DataProvider value={weatherData}>
        {weatherData ? (
          <WeatherInfo refreshData={refreshData} />
        ) : currentError ? (
          <ErrorPage error={currentError} />
        ) : (
          <Loading />
        )}
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
