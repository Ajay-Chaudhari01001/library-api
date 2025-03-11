import User from "../models/User.js"; // Importing User model
import generateToken from "../utils/generateToken.js"; // Importing token generation utility
import { userSchema, loginSchema } from "../validations/userValidation.js"; // Importing Joi validation schemas

/**
 * @desc Register a new user
 * @route POST /api/users/register
 * @access Public
 */
export const registerUser = async (req, res) => {
    // Validate request body using Joi schema
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            errors: error.details.map(err => err.message) // Extract validation error messages
        });
    }

    try {
        // Create a new user instance with request data
        const user = new User(req.body);
        await user.save(); // Save user to database

        // Generate token and store it in cookies
        generateToken(res, user._id);

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

/**
 * @desc Login user and set token in cookies
 * @route POST /api/users/login
 * @access Public
 */
export const loginUser = async (req, res) => {
    // Validate request body using Joi schema
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            errors: error.details.map(err => err.message)
        });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email: req.body.email });

        // Check if user exists and password is correct
        if (!user || !(await user.comparePassword(req.body.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate token and store it in cookies
        generateToken(res, user._id);

        res.json({ message: "User logged in successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

/**
 * @desc Logout user and clear token from cookies
 * @route POST /api/users/logout
 * @access Private
 */
export const logoutUser = (req, res) => {
    res.clearCookie("token"); // Clear authentication token from cookies
    res.json({ message: "Logged out user" });
};
