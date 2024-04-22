import express from "express";
import * as authController from "../controllers/auth-controller.js";
import { authenticateJWT } from "../middleware/auth-middleware.js";
import validateRequest from '../middleware/validationMiddleware.js'; 
import {
  userSchema,
  loginSchema,
  forgottenPasswordSchema,
} from "../validationSchemas.js";


const authRouter = express.Router();

// Sign Up
authRouter.post("/signup",validateRequest(userSchema), authController.signUpController);

// Log In
authRouter.post("/login", validateRequest(loginSchema),authController.loginController);

// Get Profile
authRouter.get(
  "/profile",
  authenticateJWT,
  authController.getProfileController
);

// Update Profile
authRouter.patch(
  "/profile",validateRequest(userSchema),
  authenticateJWT,
  authController.updateProfileController
);

// Verify Account
// authRouter.post("/verify-account", authController.verifyAccount);

//Password Forgotten
authRouter.post(
  "/forgot-password",
  validateRequest(forgottenPasswordSchema),
  authController.forgotPasswordController
);

export default authRouter;
