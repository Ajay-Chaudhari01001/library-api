import Book from "../models/Book.js"; // Importing Book model
import { bookSchema } from "../validations/bookValidation.js"; // Importing Joi validation schema

/**
 * @desc Add a new book to the library
 * @route POST /api/books
 * @access Private (Requires Authentication)
 */
export const addBook = async (req, res) => {
    // Validate request body using Joi schema
    const { error } = bookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            errors: error.details.map(err => err.message) // Extract validation error messages
        });
    }

    try {
        // Create a new book instance
        const book = new Book(req.body);
        await book.save(); // Save book to database

        res.status(201).json({ message: "Book added successfully", book });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

/**
 * @desc Get all books from the library
 * @route GET /api/books
 * @access Public
 */
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from database
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

/**
 * @desc Get a specific book by ID
 * @route GET /api/books/:id
 * @access Public
 */
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id); // Find book by ID
        if (!book) return res.status(404).json({ message: "Book not found" });

        res.json(book);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

/**
 * @desc Update book details by ID
 * @route PUT /api/books/:id
 * @access Private (Requires Authentication)
 */
export const updateBook = async (req, res) => {
    // Validate request body using Joi schema
    const { error } = bookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            errors: error.details.map(err => err.message)
        });
    }

    try {
        // Find and update book in database
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book updated successfully", book });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

/**
 * @desc Delete a book from the library by ID
 * @route DELETE /api/books/:id
 * @access Private (Requires Authentication)
 */
export const deleteBook = async (req, res) => {
    try {
        // Find and delete book by ID
        const book = await Book.findByIdAndDelete(req.params.id); 
        if (!book) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
