import { Router } from "express";
import { getProfile, logInUser, logOutUser, registerUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

//  create a route
const userRouter = Router();

// Define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', logInUser);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logout', isAuthenticated, logOutUser);

userRouter.patch('/users/me', isAuthenticated, hasPermission('update_profile'), userAvatarUpload.single('avatar'), updateProfile);

// export  router 
export default userRouter;



