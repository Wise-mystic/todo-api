import { registerUserValidator, logInUserValidator } from "../validators/user.js";
import { UserModel } from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // check if user does not exist
        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json('User already exist!')
        }
        // hash their password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        // save the user into database
        await UserModel.create({
            ...value,
            password: hashedPassword
        })
        // send user confirmation email
        // respond to request
        res.json('User register!');
    } catch (error) {
        next(error);
    }
}

export const logInUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = logInUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // find one user with identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json('User does not exist!');
        }
        // compare their passwords ''' i am determining if the password is correct
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401).json('Invalid credentials!')
        }
        // sign a token for the user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: '24h' }
        );
        // respond to request
        res.json({
            message: 'User logged in!',
            accessToken: token
        });
    } catch (error) {
        next(error);
    }
}

export const getProfile = async (req, res, next) => {
    try {
        //  Find authenticated user from the database
        const user = await UserModel
            .findById(req.auth.id)
            .select({ password: false });
        // Respond to request
        res.json(user)
    } catch (error) {
        next(error)
    }
}

export const logOutUser = (req, res, next) => {
    res.json('User logged out!');
}

export const updateProfile = (req, res, next) => {
    try {
        // validate user input
        const {error, value} = updateProfileValidator.validate(req.body);
        
        res.json('User profile was updated');
    } catch (error) {
        next(error)
    }
}
