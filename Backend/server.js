const express = require("express");
const app = express();

const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.static("../Frontend"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server up and it is listening to ${PORT}`);
});

app.get("/weather", async (req, res) => {
  const resultJSON = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.cityName}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`
  );
  console.log(resultJSON.data);

  res.json(resultJSON.data);
});
