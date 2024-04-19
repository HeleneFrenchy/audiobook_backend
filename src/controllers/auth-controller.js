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
    await createUser(email, password, username);
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
    res.status(200).json({ message: "Profile found", profile: userProfile });
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const updatedUser = await updateProfile(req.user.userId, req.body);
    if (!updatedUser) {
      return res.status(404).json("User not found");
    }

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// TODO: needs to be sychroniszed with email service & token?
// export const verifyAccountController = async (req, res) => {
//   try {
//     await authService.verifyAccount(req.body.token);
//     res.status(200).json({ message: "Account verified successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "Bad request" });
//   }
// };

// TODO : needs to be sychroniszed with email service
export const forgotPasswordController = async (req, res) => {
  try {
    await authService.forgotPassword(req.body.email);
    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
