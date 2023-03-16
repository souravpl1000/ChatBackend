const express = require("express");
const { UsersModel } = require("../Models/Users.model");

const UsersRouter = express.Router();

UsersRouter.use(express.json());

UsersRouter.get("/", async (req, res) => {
  try {
    let data = await UsersModel.find().sort({
      postedAt: -1,
    });
    res.status(200).json({ data, message: "List of all available Users." });
  } catch (err) {
    console.log("err : ", err);
    res.send({ err: err });
  }
});

UsersRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const newUsers = new UsersModel(payload);
    await newUsers.save();
    res.status(201).json({ newUsers, message: "New Users successfully Added" });
  } catch (err) {
    console.log("err : ", err);
    res.send({ msg: err });
  }
});

module.exports = {
  UsersRouter,
};
