import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenSetCookies from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const {
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      profilePicture,
    } = req.body;

    //confirming password
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password Dosen't Match" });
    }

    //Checking user is already exist or not
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "UserName Already Exists" });
    }

    //bcryptjs password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //add profile pictures
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // add user using schema
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    //Saving user
    if (newUser) {
      generateTokenSetCookies(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        password: newUser.password,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    generateTokenSetCookies(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logOut = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
