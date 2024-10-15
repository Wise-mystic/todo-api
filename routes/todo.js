import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { todoIconUpload } from "../middlewares/upload.js";

// create a router
const todoRouter = Router();

// define route
todoRouter.post('/todos', todoIconUpload.single('icon'), addTodo);

todoRouter.get('/todos',getTodos);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todo/:id', deleteTodo); 


// Listen for router or export router
export default todoRouter
