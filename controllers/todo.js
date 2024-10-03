// name export is used in the way as stated below
//  you export in your controller
// the return is added or applied on the last logic in the function
// console is for debuging ....it actual not part of the code

export const addTodo = (req, res, next) => {
    // check if user is logged in
    // validate user input
    // save todo to database
    // send them an email
    res.json('Todo was added!');
}

export const getTodos = (req, res, next) => {
    res.json('All todos!');
}

export const updateTodo = (req, res, next) => {
    res.json('Todo updated!');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted!');
}

