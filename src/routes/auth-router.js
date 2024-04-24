import express from "express";
import * as authController from "../controllers/auth-controller.js";
import { authenticateJWT } from "../middleware/auth-middleware.js";
import validateRequest from "../joi/validationMiddleware.js";
import { userSchema, loginSchema } from "../joi/validationSchemas.js";

const authRouter = express.Router();

// Sign Up
authRouter.post(
  "/signup",
  validateRequest(userSchema),
  authController.signUpController
);

// Log In
authRouter.post(
  "/login",
  validateRequest(loginSchema),
  authController.loginController
);

// Get Profile
authRouter.get(
  "/profile",
  authenticateJWT,
  authController.getProfileController
);

// Update Profile
authRouter.patch(
  "/profile",
  validateRequest(userSchema),
  authenticateJWT,
  authController.updateProfileController
);

export default authRouter;
