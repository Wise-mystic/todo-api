import { Router } from "express";
import { logIn, logOut, register } from "../controllers/user.js";

//  create a route
const userRouter = Router();

// Define routes
userRouter.post ('./register', register);

userRouter.post ('./logIn', logIn);

userRouter.post ('./logOut', logOut);

// listen  to route 
export default userRouter



