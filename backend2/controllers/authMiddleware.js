const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // Get the token from the request cookies
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify the token and extract the user_id
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(403).json({ error: "Token is not valid" });
        }
        return decoded;
      }
    );

    console.log(decoded); // log the decoded token to the console

    req.user = { id: decoded.user_id }; // Attach the user_id to req.user

    next(); // Move to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticateUser;
