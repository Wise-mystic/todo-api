// name export is used in the way as stated below
//  you export in your controller
// the return is added or applied on the last logic in the function
// console is for debuging ....it actual not part of the code

import { TodoModel } from "../model/todo.js";
import { addTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
    try {
        // check if user is logged in
        // validate user input
        const { error, value } = addTodoValidator.validate({
            ...req, body,
            icon: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }


        // write todo to database
        await TodoModel.create(value);
        // send them an email
        res.status(201).json('Todo was added!');
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
    try {
        const { filter = "{}", limit = 10, skip = 0 } = req.query;
        // fetch todos from data base
        const todos = await TodoModel
            .find(JSON.parse(filter))
            .limit(limit)
            .skip(skip);
        // return response
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

export const updateTodo = (req, res, next) => {
    res.json('Todo updated!');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted!');
}

