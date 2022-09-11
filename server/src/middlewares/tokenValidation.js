import { verifyJwt } from "../config/jwt.js";

export const tokenValidation = (req, res, next) => {
  if (req.methods === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const { valid, decoded } = verifyJwt(token);

    if (valid) {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: "User not auth!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "User not auth!" });
  }
};

export default { tokenValidation };
