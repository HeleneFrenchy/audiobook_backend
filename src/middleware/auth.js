import { verifyToken } from "../services/auth-service.js";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    try {
      const user = verifyToken(token);
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
};
