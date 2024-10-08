    //  Working code

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import Player from '../models/Player.js';
import HiringManager from '../models/HiringManager.js';
import Admin from '../models/Admin.js';
import customError from '../middlewares/customError.js';

export const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, role });

    // Create associated models based on the role
    if (role === 'player') await Player.create({ userId: user._id, username , email });
    else if (role === 'hiringManager') await HiringManager.create({ userId: user._id });
    else if (role === 'admin') await Admin.create({ userId: user._id, username , email});

    const token = generateToken(user._id, user.role);
    res.status(201).json({ token, role: user.role });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import generateToken from '../utils/generateToken.js';
// import Player from '../models/Player.js';
// import HiringManager from '../models/HiringManager.js';
// import Admin from '../models/Admin.js';

// export const signup = async (req, res) => {
//   const { username, email, password, role } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     // Create user
//     const user = await User.create({ username, email, password: hashedPassword, role });

//     // Check for role and create corresponding model data
//     if (role === 'player') {
//       await Player.create({ userId: user._id, name: username });
//     } else if (role === 'hiringManager') {
//       await HiringManager.create({ userId: user._id });
//     } else if (role === 'admin') {
//       await Admin.create({ userId: user._id });
//     }

//     // Generate token
//     const token = generateToken(user._id, user.role);
    
//     res.status(201).json({ token, role: user.role });

//   } catch (error) {
//     console.error(error); // Log the specific error for debugging
//     res.status(500).json({ error: 'Server error: ' + error.message });
//   }
// };



export const login = async (req, res, next) => {
  const { email, password } = req.body;
console.log(req.body)
  // try {
  //   // Check for Admin user
  //   let user = await Admin.findOne({ email });
  //   if (user) {
  //     const validPassword = await bcrypt.compare(password, user.password);
  //     if (!validPassword) return next(customError(401, "Incorrect email or password for admin"));

  //     const token = jwt.sign({ id: user._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: "1d" });
  //     res.cookie("token", token, { sameSite: "None", httpOnly: true });
  //     return res.status(200).json({ username: user.username, email: user.email, role: 'admin', token });
  //   }

  //   // Check for Player user
  //   user = await Player.findOne({ email });
  //   if (user) {
  //     const validPassword = await bcrypt.compare(password, user.password);
  //     if (!validPassword) return next(customError(401, "Incorrect email or password for player"));

  //     const token = jwt.sign({ id: user._id, role: 'player' }, process.env.JWT_SECRET, { expiresIn: "1d" });
  //     res.cookie("token", token, { sameSite: "None", httpOnly: true });
  //     return res.status(200).json({ username: user.username, email: user.email, role: 'player', token });
  //   }

  //   // Check for Hiring Manager user
  //   user = await HiringManager.findOne({ email });
  //   if (user) {
  //     const validPassword = await bcrypt.compare(password, user.password);
  //     if (!validPassword) return next(customError(401, "Incorrect email or password for hiring manager"));

  //     const token = jwt.sign({ id: user._id, role: 'hiringManager' }, process.env.JWT_SECRET, { expiresIn: "1d" });
  //     res.cookie("token", token, { sameSite: "None", httpOnly: true });
  //     return res.status(200).json({ username: user.username, email: user.email, role: 'hiringManager', token });
  //   }

  //   // If the email is not found in any schema
  //   return next(customError(401, "Incorrect email or password")); // General error for all types
  // } catch (error) {
  //   console.error("Sign-in error:", error);
  //   next(customError(500, "An error occurred during sign in"));
  // }
};



export const players= async(req,res)=>{
  const response = await Player.find();
  res.status(200).json(response)
}

export const adminFind= async(req,res)=>{
  const response = await Admin.find();
  res.status(200).json(response)
}

export const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  
  try {
    const response = await Admin.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }

    res.status(200).json({
      message: "Admin deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the admin",
      error: error.message
    });
  }
};


export const findUsers= async(req,res)=>{
  const response = await User.find();
  res.status(200).json(response)
}