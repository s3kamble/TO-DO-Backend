const {Router} = require("express");
const { getAllTasks, getTaskById ,validation, createTask, deleteTask, updateTask, updateValidation} = require("../controllers/taskController");

const router = Router();
const postMiddleWare = [validation,createTask]

router.route("/").get(getAllTasks).post(postMiddleWare);
router.route("/:taskId").get(getTaskById).delete(deleteTask).put([validation,updateTask]);

module.exports = router;