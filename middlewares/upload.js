import multer from "multer";
import {multerSaveFilesOrg} from "multer-savefilesorg";

export const localUpload = multer({dest:'uploads/'});

export const todoIconUpload =  multer({
    Storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_AOI_KEY,
        // Relativepath : '/uploads/*'
        relativePath: '/todo-api/todos/*'
        }),
        preservePath: true
});

export const userAvatarUpload =  multer({
    Storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_AOI_KEY,
        // Relativepath : '/uploads/*'
        relativePath: '/todo-api/users/*'
        }),
        preservePath: true
});