import express from "express";
import * as authController from "../controllers/auth-controller.js";
import { authenticateJWT } from "../middleware/auth.js";

const authRouter = express.Router();

// Sign Up
authRouter.post("/signup", authController.signUpController);

// Log In
authRouter.post("/login", authController.loginController);

// Update Profile
authRouter.put(
  "/profile",
  authenticateJWT,
  authController.updateProfileController
);

// Verify Account
// authRouter.post("/verify-account", authController.verifyAccount);

// Password Forgotten
// authRouter.post("/forgot-password", authController.forgotPasswordController);

export default authRouter;
