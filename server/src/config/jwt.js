import jwt from "jsonwebtoken";

const key = process.env.KEY || "todo_solvve_public_key";

export function singJwt (user, options) {
  return jwt.sign(user, key, { options, algorithm: "RS256" });
}

export function verifyJwt (token) {
  try {
    const decoded = jwt.verify(token, key);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoced: null,
    };
  }
}
