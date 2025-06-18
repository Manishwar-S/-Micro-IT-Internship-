const express = require("express");
const router = express.Router();
const controller = require("../controller/todoController");

router.get("/", controller.getTodos);
router.post("/", controller.addTodo);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
