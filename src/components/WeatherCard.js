const WeatherCard = (props) => {
  const { data } = props;
  return <div>{JSON.stringify(data)}</div>;
};

export default WeatherCard;
