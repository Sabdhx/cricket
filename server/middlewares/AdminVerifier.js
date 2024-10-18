import jwt, { decode } from 'jsonwebtoken';
import dotenv from 'dotenv';
// import customError from './customError.js';
dotenv.config();

 export const customError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const AdminVerifier = (req, res, next) => {
  // Get the cookies from the request header
  const cookieHeader = req.headers.cookie;

  // Check if the cookies exist
  if (!cookieHeader) {
    return next(customError(401, 'No token found'));
  }

  // Extract the token from the cookie string
  const token = cookieHeader.split('token=')[1];

  // Ensure the token was extracted
  if (!token) {
    return next(customError(401, 'Token missing from cookies'));
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    console.log(decoded.role); // Log the decoded payload
    if(decoded.role === "admin"){
 // Proceed to the next middleware
 next();
    }



  } catch (error) {
    // Handle invalid or expired token
    return next(customError(401, 'Invalid or expired token'));
  }
};


export default AdminVerifier;
