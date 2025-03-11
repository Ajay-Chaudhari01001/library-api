import express from "express";
import {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
} from "../controllers/bookController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getbook", getBooks);
router.post("/createbook", protect, addBook);
router.get("/getbook/:id", getBookById);
router.put("/updatebook/:id", protect, updateBook);
router.delete("/deletebook/:id", protect, deleteBook);

export default router;
