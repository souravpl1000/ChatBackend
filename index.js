require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.port;
const app = express();
const { connection } = require("./Configs/db");
const { UsersRouter } = require("./Routes/Users.routes");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.use("/user", UsersRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at PORT : ${PORT} `);
});
