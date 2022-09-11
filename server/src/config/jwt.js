import jwt from "jsonwebtoken";

const key = process.env.KEY || "todo_solvve_public_key";

export const singJwt = (data, options) => {
  return jwt.sign(data, key, { ...options, algorithm: "HS256" });
};

export const verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, key);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
};

export default { singJwt, verifyJwt };
