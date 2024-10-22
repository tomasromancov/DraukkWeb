const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["https://ubiquitous-creponne-8b56a1.netlify.app"],
};
const connection = require("./config");
const property = require("./property");

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

connection.connect();

//GET all properties
app.get("/properties", async function (req, res) {
  const properties = await property.getProperties();
  try {
    res.send({ properties });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch properties" });
  }
});
