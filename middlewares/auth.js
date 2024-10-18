// import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import { UserModel } from "../model/user.js";
import { permissions } from "../utils/rbac.js";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ['HS256']
})

export const hasPermission = (action) => {
    return async (req, res, next) => {
        try {
            // Find user from the database
            const user = await UserModel.findById(req.auth.id);
            // Use the user role to find their permission
            const permission = permissions.find(value => value.role === user.role);
            if (!permission) {
                return res.status(403).json('No permision found!');
            }
            // Check if permission actions includes action
            if (permission.actions.includes(action)) {
                next();
            } else {
                res.status(403).json('Action not allowed!')
            }
        } catch (error) {
            next(error);
        }
    }
}










































// export const isAuthenticated = (req, res, next) => {
//     try {
//         // get authorization from headers
//         const authorization = req.headers.authorization;
//         // extract token from the authorization header
//         const token = authorization.split(' ')[1];
//         // verify and decode the token to get the user
//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_PRIVATE_KEY
//         );
//         // attach user to request
//         req.user = { id: decoded.id };
//         // hand over request to the next middleware or controller
//         next();
//     } catch (error) {
//         next(error);
//     }
// }

