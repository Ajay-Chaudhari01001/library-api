# 📚 Library Management API

This project is a RESTful API built with Node.js, Express.js, and MongoDB that manages a library's book collection. It supports CRUD operations, pagination, data validation (Joi), authentication (JWT), and follows ES6 module syntax.

## 📁 Folder Structure

📂 library-api/
├── 📂 config/ # Database connection file
├── 📂 controllers/ # Logic for handling book operations
├── 📂 middleware/ # Authentication & error handling middleware
├── 📂 models/ # Mongoose schema for book collection
├── 📂 routes/ # API routes
├── 📂 utils/ # Utility functions (JWT generation)
├── 📂 validations/ # Joi schema validation
├── .env # Environment variables (not committed to GitHub)
├── .gitignore # Files and folders to ignore in Git
├── README.md # Documentation (this file)
├── package.json # Project metadata and dependencies
└── server.js # Main entry point of the application


## 🚀 Features

- ✅ CRUD Operations on Books
- ✅ Pagination Support
- ✅ Input Validation using Joi
- ✅ Authentication using JWT
- ✅ Global Error Handling
- ✅ ES6 Syntax (import/export)
- ✅ Organized Folder Structure

## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/library-api.git
cd library-api
