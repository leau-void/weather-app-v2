import { Typography } from "@mui/material";
import { useContext } from "react";
import UnitContext from "../context/UnitContext";
import unitConverter from "../utils/unitConverter";

const Temperature = (props) => {
  const { children } = props;
  const unit = useContext(UnitContext);

  return (
    <Typography component="span">{unitConverter[unit](children)}</Typography>
  );
};

export default Temperature;
