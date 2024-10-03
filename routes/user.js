import { Router } from "express";
import { logIn, logOut, register } from "../controllers/user.js";

//  create a route
const userRouter = Router();

// Define routes
userRouter.post ('./users/register', register);

userRouter.post ('./users/login', logIn);

userRouter.post ('./users/logout', logOut);

// export  router 
export default userRouter;



