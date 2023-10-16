const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleWare
app.use(cors());

const users = [
  {
    id: 1,
    name: "Joy",
    email: "Joy@gmail.com",
  },
  {
    id: 2,
    name: "Joy2",
    email: "Joy2@gmail.com",
  },
  {
    id: 3,
    name: "Joy3",
    email: "Joy3@gmail.com",
  },
];

app.get("/", (req, res) => {
  // This is root route!
  res.send("Users ManageMent server is running!");
});

// /users api ta k amra jokhon server chalabo setar / user k jodi amra call kori tahole se "/users" te hit korbe
app.get("/users", (req, res) => {
  res.send(users);
});

// Ami kon typer jinis paite chai seta jodi na mention kore dei tahole default hisebe get er kase dhore fele r put,post,delete er khetre explicitly bole dite hobe client side theke
app.post("/users", (req, res) => {
  console.log("Post api hitting!");
  const newUser = req.body;
  console.log(newUser);
});

// Chalanor jonno
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
