const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// Import JSON files.
const projects = require("./projects.json");
const about = require("./about.json");
const contact = require("./contact.json")

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/contact", (req, res) => {
  res.json(contact);
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  res.json(about);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));