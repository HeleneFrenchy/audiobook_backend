import express from "express";
import authController from "../controllers/auth-controller";
import { authenticateJWT } from "../middleware/auth";

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

export default router;

