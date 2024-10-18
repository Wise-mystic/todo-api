import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    name: { type: String, required: true},
    email: {type: String, reqired: true, unique: false},
    password: { type: String, default: false},
    avatar: { type: String },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'vender', 'admin', 'superadmin']
    }
}, {
    timestamps: true
});
userSchema.plugin(toJSON);

export const UserModel = model('User', userSchema);