import { useContext, useRef, useState, useCallback, useEffect } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import unitOptions from "../utils/unitOptions";
import DataContext from "../context/DataContext";
import isMobile from "../utils/isMobile";
import CardsFrame from "./CardsFrame";
import WeatherCard from "./WeatherCard";
import { Grid, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const styles = {
  root: {
    width: "100%",
    height: "100%",
  },
  topBar: {
    display: "grid",
    grid: "1fr / 1fr auto ",
    placeItems: "center center",
  },
  radioButtons: {
    fontSize: "1.5rem",
    alignItems: "center",
    textAlign: "center",
  },
  refreshButton: {},
};

const WeatherInfo = (props) => {
  const { refreshData } = props;

  const [unit, setUnit] = useState("c");
  const [page, setPage] = useState(0);
  const data = useContext(DataContext);
  const [pagedData, setPagedData] = useState([]);
  const pageSize = useRef(isMobile ? 1 : 3);

  useEffect(() => {
    const pages = [];
    for (let i = 0; i < Math.ceil(data.length / pageSize.current); i++) {
      const startI = i * pageSize.current;
      pages.push(data.slice(startI, startI + pageSize.current));
    }
    setPagedData(pages);
  }, [data]);

  const prevPage = useCallback(() => {
    setPage((prevPage) => (prevPage === 0 ? 0 : prevPage - 1));
  }, []);

  const nextPage = useCallback(() => {
    setPage((prevPage) =>
      prevPage < pagedData.length - 1 ? prevPage + 1 : prevPage
    );
  }, [pagedData]);

  return (
    <Grid sx={styles.root}>
      <Grid sx={styles.topBar}>
        <RadioButtonGroup
          title="Units"
          value={unit}
          setValue={setUnit}
          options={unitOptions}
          sx={styles.radioButtons}
        />
        <IconButton onClick={refreshData} size="large">
          <RefreshIcon />
        </IconButton>
      </Grid>
      <CardsFrame
        disabled={
          page === 0 ? "prev" : page === pagedData.length - 1 ? "next" : ""
        }
        next={nextPage}
        prev={prevPage}>
        {pagedData[0] &&
          pagedData[page].map((data) => (
            <WeatherCard key={data.dt} data={data} />
          ))}
      </CardsFrame>
    </Grid>
  );
};

export default WeatherInfo;
