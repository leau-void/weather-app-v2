const formatDate = (string) => {
  const date = new Date(string).toDateString().split(" ");
  const [x, time] = string.split(" ");
  const [hour, min] = time.split(":");
  return `${date[2]} ${date[1]} - ${hour} ${Number(hour) < 12 ? "am" : "pm"}`;
};

export default formatDate;
