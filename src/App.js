import { useState, useEffect } from "react";
import "./App.css";
import weatherService from "./services/weather.service";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weatherService.get().then((result) => setWeatherData(result));
  }, []);

  console.log(weatherData);

  return <div className="App"></div>;
}

export default App;
