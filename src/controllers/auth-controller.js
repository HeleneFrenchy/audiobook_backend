import {
  checkIfUserExists,
  comparePassword,
  createUser,
  hashPassword,
  updateProfile,
  generateToken,
  getProfile,
} from "../services/auth-service.js";

export const signUpController = async (req, res) => {
  try {
    let { email, password, username } = req.body;
    // check if user already exists
    let userExists = await checkIfUserExists(email);
    if (userExists) {
      res.status(400).send("User already exist");
    }
    // hash the password
    password = hashPassword(password);
    // Create our user in the DB
    const user = await createUser(email, password, username);
    try {
      let token = generateToken(user.id);
      res.status(200).send({
        token,
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginController = async (req, res) => {
  let { email, password } = req.body;
  let user = await checkIfUserExists(email);
  if (!user) {
    return res.status(400).send("User does not exist");
  }
  let passwordMatch = comparePassword(password, user.password);
  if (!passwordMatch) {
    return res.status(400).send("Password is incorrect");
  }
  try {
    let token = generateToken(user.id);
    res.status(200).send({
      token,
      message: "User logged in",
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const getProfileController = async (req, res) => {
  try {
    const userId = req.user.userId;
    const userProfile = await getProfile(userId);
    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const userData = { ...req.body.password };
    if (userData.password) {
      userData.password = hashPassword(userData.password);
    }

    const updatedUser = await updateProfile(req.user.userId, userData);
    if (!updatedUser) {
      return res.status(404).json("User not found");
    }

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
