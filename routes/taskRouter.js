const {Router} = require("express");
const { getAllTasks, getTaskById ,validation, createTask, deleteTask, updateTask} = require("../controllers/taskController");

const router = Router();
const postMiddleWare = [validation,createTask];
const putMiddleWare = [validation,updateTask];

router.route("/").get(getAllTasks).post(postMiddleWare);
router.route("/:taskId").get(getTaskById).delete(deleteTask).put(putMiddleWare);

module.exports = router;