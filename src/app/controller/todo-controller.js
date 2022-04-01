// All controller logic for CRUD operation will stay here

const ToDoModel = require('../model/todo-model');

// Create and save ToDo Task
exports.create = (req, res) => {
    const REQUEST_BODY = req.body;

    console.log(REQUEST_BODY);

    // validate request_body
    if (!REQUEST_BODY) {
        return res.status(400).send({
            message: 'payload can not be empty'
        });
    }

    const todoPayload = new ToDoModel({
        title: REQUEST_BODY.title,
        priority: REQUEST_BODY.priority,
        status: REQUEST_BODY.status,
        todo_type: REQUEST_BODY.todo_type,
        description: REQUEST_BODY.description
    });

    todoPayload.save()
        .then((data) => {
            res.status(200).send({
                data: data,
                message: `task created successfully`
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: `unable to create task. Error: ${err.message}`
            });
        });
};

// fetch single ToDo Task
exports.findOne = (req, res) => {
    const id = req.params.id;

    ToDoModel.findById(id)
    .then((task) => {
        res.status(200).send({
            data: task,
            message: `Successfully fetched task for id: ${id}`
        })
    })
    .catch(err => {
        if(err.kind === 'ObjectID'){
            return res.status(400).send({
                message: `task not found. ID: ${id}`
            });
        }

        return res.status(500).send({
            message: `Error fetching task. Id: ${id} `
        })
    });

};

// fetch all ToDo Task
exports.findAll = (req, res) => {

};

// Update existing ToDo Task
exports.update = (req, res) => {

};

// Delete existing ToDo Task
exports.delete = (req, res) => {

};
