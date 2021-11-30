import { Typography } from "@mui/material";
import { useContext } from "react";
import UnitContext from "../context/UnitContext";
import unitConverter from "../utils/unitConverter";
import unitOptions from "../utils/unitOptions";

const Temperature = (props) => {
  const { children } = props;
  const unit = useContext(UnitContext);

  return (
    <Typography component="span">
      {unitConverter[unit](children) +
        unitOptions.find((option) => option.value === unit).symbol}
    </Typography>
  );
};

export default Temperature;
