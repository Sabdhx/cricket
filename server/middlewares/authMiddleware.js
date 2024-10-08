import jwt from 'jsonwebtoken';

const playerFind = (req, res, next) => {
  const token = req.token;
  console.log(token)
next()
};

export default playerFind;
