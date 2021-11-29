const API =
  "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=9602719e47f870b7daf0ea57e5379f09&cnt=40";

const get = () => {
  const getInfo = { method: "GET" };
  return new Promise((resolve, reject) => {
    fetch(`${API}`, getInfo)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const weatherService = {
  get,
};

export default weatherService;
