import { useContext, useRef, useState, useCallback, useEffect } from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import unitOptions from "../utils/unitOptions";
import DataContext from "../context/DataContext";
import isMobile from "../utils/isMobile";
import CardsFrame from "./CardsFrame";
import WeatherCard from "./WeatherCard";
import { Grid, IconButton, AppBar } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { UnitProvider } from "../context/UnitContext";

const styles = {
  root: {
    width: "100%",
    height: "100%",
  },
  topBar: {
    display: "grid",
    grid: "1fr / 1fr auto ",
    placeItems: "center center",
    py: { xs: 1, sm: 2 },
  },
  radioButtons: {
    fontSize: "1.5rem",
    alignItems: "center",
    textAlign: "center",
  },
  refreshButton: {
    mx: { xs: 2, sm: 4 },
  },
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
    <UnitProvider value={unit}>
      <Grid sx={styles.root}>
        <AppBar color="primary" position="relative" sx={styles.topBar}>
          <RadioButtonGroup
            title="Units"
            value={unit}
            setValue={setUnit}
            options={unitOptions}
            sx={styles.radioButtons}
          />
          <IconButton onClick={refreshData} sx={styles.refreshButton}>
            <RefreshIcon color="secondary.dark" fontSize="large" />
          </IconButton>
        </AppBar>
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
    </UnitProvider>
  );
};

export default WeatherInfo;
