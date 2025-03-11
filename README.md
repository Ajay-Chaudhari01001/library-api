
# Library Management API

This is a RESTful API for managing a library's book collection using Node.js, Express.js, and MongoDB. The API supports authentication, data validation with Joi, and CRUD operations for books.

## 📂 Project Folder Structure


📁 library-api
│── 📁 config/               # Configuration files (DB connection, etc.)
│── 📁 controllers/          # Controllers for handling requests
│   │── bookController.js    # Controller for book operations
│   │── userController.js    # Controller for user authentication
│── 📁 middleware/           # Middleware for authentication and error handling
│   │── authMiddleware.js    # Middleware for authentication
│── 📁 models/               # Mongoose models for MongoDB
│   │── Book.js              # Book schema
│   │── User.js              # User schema
│── 📁 routes/               # Route handlers for API endpoints
│   │── bookRoutes.js        # Routes for book operations
│   │── userRoutes.js        # Routes for user authentication
│── 📁 validations/          # Joi validation schemas
│   │── bookValidation.js    # Joi validation for books
│   │── userValidation.js    # Joi validation for users
│── 📁 utils/                # Utility functions
│   │── generateToken.js     # Token generation function
│── .env                     # Environment variables
│── server.js                # Entry point for the application
│── package.json             # Dependencies and scripts
│── README.md                # Project documentation
```

## 🚀 Getting Started

### 1️⃣ Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- MongoDB (Local or Atlas)
- Postman (for API testing)

### 2️⃣ Installation

Clone the repository and install dependencies:

```sh
# Clone the repo
git clone https://github.com/yourusername/library-api.git
cd library-api

# Install dependencies
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
COOKIE_SECRET=your_cookie_secret_key
```

### 4️⃣ Start the Server

```sh
npm start  # Start the server in production mode
npm run dev  # Start the server in development mode (nodemon enabled)
```

The server will run on `http://localhost:5000`.

## 📌 API Endpoints

### 🛠️ Authentication Routes (/api/users)

| Method | Route     | Description       | Authentication |
|--------|-----------|-------------------|----------------|
| POST   | /register | Register a new user | No             |
| POST   | /login    | Log in a user     | No             |
| POST   | /logout   | Log out a user    | Yes            |

### 📚 Book Routes (/api/books)

| Method | Route | Description           | Authentication |
|--------|-------|-----------------------|----------------|
| GET    | /     | Get all books         | No             |
| GET    | /:id  | Get a single book by ID | No           |
| POST   | /     | Add a new book        | Yes            |
| PUT    | /:id  | Update a book by ID   | Yes            |
| DELETE | /:id  | Delete a book by ID   | Yes            |

## 🔐 Authentication & Token Handling

On successful login, a JWT token is generated and stored in cookies.

To access protected routes, include the token in the request cookies.

On logout, the cookie is cleared.

## 📌 Testing the API with Postman

### 1️⃣ Register a User

- URL: `POST http://localhost:5000/api/users/register`
- Body (JSON):

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
}
```

### 2️⃣ Login User

- URL: `POST http://localhost:5000/api/users/login`
- Body (JSON):

```json
{
    "email": "john@example.com",
    "password": "123456"
}
```

- Response: Token stored in cookies

### 3️⃣ Create a Book (Authenticated)

- URL: `POST http://localhost:5000/api/books`
- Headers:

```
Cookie: token=your_jwt_token
```

- Body (JSON):

```json
{
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "year": 1988,
    "genre": "Fiction"
}
```

### 4️⃣ Get All Books

- URL: `GET http://localhost:5000/api/books`

### 5️⃣ Update a Book (Authenticated)

- URL: `PUT http://localhost:5000/api/books/:id`
- Headers:

```
Cookie: token=your_jwt_token
```

- Body (JSON):

```json
{
    "title": "Updated Title",
    "author": "Updated Author",
    "year": 2020,
    "genre": "Updated Genre"
}
```

### 6️⃣ Delete a Book (Authenticated)

- URL: `DELETE http://localhost:5000/api/books/:id`
- Headers:

```
Cookie: token=your_jwt_token
```

## ⚙️ Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT, Cookies
- Validation: Joi
- Security: bcrypt for password hashing
```
