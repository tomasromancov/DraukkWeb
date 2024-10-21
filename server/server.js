const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const connection = require('./config');

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

connection.connect();

async function getProperties() {
  return new Promise((resolve, reject) => {
      connection.query('Select * from properties', (err, rows) => {
          if(err)
              reject(err);
          else
              resolve(rows);
      });
  });
}

app.get('/properties', async function(req, res){
  const properties = await getProperties();
  res.send({properties});
});
