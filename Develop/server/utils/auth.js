const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express'); 

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.query?.token || req.headers?.authorization;

    // Extract token if it comes as "Bearer <tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token is found, simply return null without modifying request context
    if (!token) {
      return null;
    }

    try {
      // Verify token and attach user data to request context
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      return { user: data };
    } catch {
      // Log for debugging; consider more nuanced error handling for production
      console.log('Invalid token');
      return null;
    }
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

