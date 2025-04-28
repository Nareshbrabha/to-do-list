const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
},{
    timestamps: true
});

const todoModel = mongoose.model('todo', todoSchema);

async function createTODO(title,description){
    const todo = await todoModel.create({
    title,
    description
});
    return todo;
}

async function deleteTODO(id){
    const deletetodo = await todoModel.deleteOne(id);
    return deletetodo;
}
async function updateTODO(_id, title, description){
    const updated = await todoModel.updateOne({
        _id
    },{
        title,
        description
    });
    return updated;
}
module.exports = {
    createTODO,
    deleteTODO,
    updateTODO
}