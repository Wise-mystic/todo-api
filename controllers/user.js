export const registerUser = (req, res, next) => {
    res.json('User register!');
}

export const logInUser = (req, res, next) => {
    res.json('User logged in!');
}

export const logOutUser = (req, res, next) => {
    res.json('User logged out!');
}

export const updateProfile = (req, res, next) => {
    res.json('User profile was updated');
}
