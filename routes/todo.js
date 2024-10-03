import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";

// create a router
const todoRouter = Router();

// define route
todoRouter.post('/todos', addTodo);

todoRouter.get('/todos',getTodos);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todo/:id', deleteTodo); 


// Listen for router or export router
export default todoRouter
