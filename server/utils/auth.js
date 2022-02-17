import jwt from 'jsonwebtoken';
const jwtExpiration = '2h';

const auth = {
  signToken: function ({ username, _id }) {
    const payload = { username, _id };
    return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: jwtExpiration });
  },
  authenticateToken: function (req) {
    let user = null;
    
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      
      if (decoded) user = decoded;
      
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

export default auth;
