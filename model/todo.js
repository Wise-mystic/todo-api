// import { string } from "joi";
import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const todoSchema = new Schema({
    title: { type: String, required: true, unique: false},
    icon: {type: String, reqired: true},
    completed: { type: Boolean, default: false}
});
todoSchema.plugin(toJSON);

export const TodoModel = model('Todo', todoSchema);