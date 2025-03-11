import Joi from "joi";

// User Registration Validation Schema
export const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 3 characters",
        "string.max": "Name must be less than 30 characters"
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Invalid email format",
        "string.empty": "Email is required"
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters long"
    })
});

// User Login Validation Schema
export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Invalid email format",
        "string.empty": "Email is required"
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters long"
    })
});
