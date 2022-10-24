const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require("./data/course-categories.json");
const availableCourses = require("./data/available-courses.json");

app.get("/", (req, res) => {
  res.send("Hello from MW Academy!");
});

// Serve all Course categories
app.get("/course-categories", (req, res) => {
  res.send(courseCategories);
});

// Serve specific category data
app.get("/category/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const selectedCategoryCourses = availableCourses.filter(
    (course) => course.categoryId === +id
  );

  if (id === "all") {
    res.send(availableCourses);
  }

  res.send(selectedCategoryCourses);
});

// Serve a specific course data

app.get("/course/:id", (req, res) => {
  const id = req.params.id;

  const selectedCourse = availableCourses.find(
    (course) => course.courseId === id
  );

  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
