const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.status(201).json({ contents: tasks });
};

module.exports.saveTasks = (req, res) => {
  const { tasks } = req.body;

  TaskModel.create({ tasks })
    .then((data) => {
      console.log("Saved successfully...");
      res.status(201).json({ message: "Saved successufully ...", data: data });
    })
    .catch((err) => {
      res.status(501).json({ error: err, message: "Something went wrong" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { tasks } = req.body;

  TaskModel.findByIdAndUpdate(id, { tasks })
    .then(() => {
      res.status(201).json({ message: " Update successfully ..." });
    })
    .catch((err) => {
      res.status(501).json({ error: err, message: "Something went wrong" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => {
      res.status(201).json({ message: " Deleted successfully ..." });
    })
    .catch((err) => {
      res.status(501).json({ error: err, message: "Something went wrong" });
    });
};
