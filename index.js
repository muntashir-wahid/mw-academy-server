const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require("./data/course-categories.json");

app.get("/", (req, res) => {
  res.send("Hello from MW Academy!");
});

app.get("/course-categories", (req, res) => {
  res.send(courseCategories);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
