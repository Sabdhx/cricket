    //  Working code

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import Player from '../models/Player.js';
import HiringManager from '../models/HiringManager.js';
import Admin from '../models/Admin.js';
// import customError from '../middlewares/customError.js';
import jwt from "jsonwebtoken";

// export const customError = (statusCode, message) => {
//   const error = new Error(message);
//   error.statusCode = statusCode;
//   return error;
// };

export const signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    
      let user = new User({
        username,
        email,
        password: hashedPassword,
        role,
      });
      
      const newUser = await User.create(user);
      return res.status(201).json({ message: 'user created successfully' });
    } 
    
    // if (role === "player") {
    //   let PlayerData = new Player({
    //     username,
    //     email,
    //     password: hashedPassword,
    //     role,
    //   });
    //   const newPlayer = await Player.create(PlayerData); // Renaming the variable to `newPlayer`
    //   return res.status(201).json({ message: 'Player created successfully' });
    // } 
    
    // let hier = new HiringManager({
    //   username,
    //   email,
    //   password: hashedPassword,
    //   role,
    // });      
    // const newHiringManager = await HiringManager.create(hier); // Renaming variable to avoid conflicts
    // return res.status(201).json({ message: 'HiringManager created successfully' });
  
  catch (error) {
    next(error); // Handle error
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
      const user = await User.findOne({ email });
      if (!user) {
          res.status(401).json( {message:"User not found or incorrect email"});
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
          return next(customError(401, "Incorrect password"));
      }

      const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET || "secret",
          { expiresIn: "1d" }
      );

      res.cookie("token", token, {
          httpOnly: true,  // Secure cookie
          maxAge: 24 * 60 * 60 * 1000,  // 1 day
          secure: false,  // Set to true in production for HTTPS
          sameSite: 'Lax', // Adjust as needed
      });

      // Handle different roles
      switch (user.role) {
          case "admin":
              const existingAdmin = await User.findOne({ _id: user._id });
              if (!existingAdmin) {
                  await Admin.create(user);
              }
              return res.status(200).json({ userName: user.username, email: user.email, role: user.role, token });
              
          case "player":
              try {
                  const playerData = await User.findOne({ _id: user._id });
                  if (!playerData) {
                      await Player.create({ _id: user._id });
                  }
              } catch (err) {
                res.status(401).json( {message:"error creating player data"});
              }
              return res.status(200).json({ userName: user.username, email: user.email, role: user.role, token });
              
          case "hiringManager":
              try {
                  const hiringData = await User.findOne({ _id: user._id });
                  if (!hiringData) {
                      await HiringManager.create({ _id: user._id });
                  }
              } catch (err) {
                res.status(401).json( {message:"erorr creating hiring manager"});
              }
              return res.status(200).json({ userName: user.username, email: user.email, role: user.role, token });
              
          default:
            res.status(401).json( {message:"invalid user role"});
          }

  } catch (error) {
      console.error("Sign-in error:", error);
      res.status(401).json( {message:"erorr occured during signupe"});
    }
};

export const players = async (req,res)=>{
  const response = await Player.find();
  res.status(200).json(response)
}



export const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  
  try {
    const response = await HiringManager.findByIdAndDelete(id);

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

export const findUsers = async (req,res)=>{
  const response = await User.find();
  res.status(200).json(response)
}

export const logout = async (req,res)=>{
  res.clearCookie("token",{
    httpOnly:true,
    secure:true,
    sameSite:"none"
  })
  .send({message:"cookie cleared successfully"})
} 