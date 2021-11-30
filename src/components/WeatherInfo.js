import {
  useContext,
  useRef,
  useState,
  useCallback,
  useReducer,
  useEffect,
} from "react";
import RadioButtonGroup from "./RadioButtonGroup";
import unitOptions from "../utils/unitOptions";
import DataContext from "../context/DataContext";
import isMobile from "../utils/isMobile";
import CardsFrame from "./CardsFrame";
import WeatherCard from "./WeatherCard";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtons: {
    fontSize: "1.5rem",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
};

const WeatherInfo = () => {
  const [unit, setUnit] = useState("c");
  const [page, setPage] = useState(0);
  const data = useContext(DataContext);
  const [pagedData, setPagedData] = useState([]);
  const pageSize = useRef(isMobile ? 1 : 3);

  useEffect(() => {
    console.log("page");
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
    <div>
      <RadioButtonGroup
        title="Units"
        value={unit}
        setValue={setUnit}
        options={unitOptions}
        sx={styles.radioButtons}
      />
      <CardsFrame next={nextPage} prev={prevPage}>
        {pagedData[0] &&
          pagedData[page].map((data) => (
            <WeatherCard key={data.dt} data={data} />
          ))}
      </CardsFrame>
    </div>
  );
};

export default WeatherInfo;
