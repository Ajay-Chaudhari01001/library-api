import Joi from "joi";

// Book Validation Schema
export const bookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required().messages({
        "string.empty": "Title is required",
        "string.min": "Title must be at least 3 characters",
        "string.max": "Title must be less than 100 characters"
    }),
    author: Joi.string().min(3).max(50).required().messages({
        "string.empty": "Author is required",
        "string.min": "Author name must be at least 3 characters",
        "string.max": "Author name must be less than 50 characters"
    }),
    year: Joi.number().integer().min(1000).max(new Date().getFullYear()).required().messages({
        "number.base": "Year must be a number",
        "number.min": "Year must be at least 1000",
        "number.max": `Year must be less than or equal to ${new Date().getFullYear()}`
    }),
    genre: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Genre is required",
        "string.min": "Genre must be at least 3 characters",
        "string.max": "Genre must be less than 30 characters"
    })
});
