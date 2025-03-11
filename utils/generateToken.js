import jwt from "jsonwebtoken";

/**
 * Generate JWT token and store it in HTTP-only cookies
 * @param {Object} res - Express response object
 * @param {String} userId - User's unique ID
 */
const generateToken = (res, userId) => {
    // Generate JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
        httpOnly: true,  // Prevents JavaScript access (XSS protection)
        secure: process.env.NODE_ENV === "production",  // Use secure cookies in production
        sameSite: "strict",  // CSRF protection
        maxAge: 3600000,  // 1 hours
    });
};

export default generateToken;
