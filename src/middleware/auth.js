import { verifyToken } from "../services/auth-service.js";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    try {
      req.user = verifyToken(token);
      next();
    } catch (err) {
      console.error("Unauthorized access", err);
      return res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
};
