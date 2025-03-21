import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const protect = (req, res, next) => {
    // extract token from cookies
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default protect;
