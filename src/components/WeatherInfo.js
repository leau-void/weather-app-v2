import { useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import unitOptions from "../utils/unitOptions";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const WeatherInfo = () => {
  const [unit, setUnit] = useState("c");

  return (
    <div>
      <RadioButtonGroup
        title="Units"
        value={unit}
        setValue={setUnit}
        options={unitOptions}
      />
    </div>
  );
};

export default WeatherInfo;
