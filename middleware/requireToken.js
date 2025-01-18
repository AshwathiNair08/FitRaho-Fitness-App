const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');  // Changed 'user' to 'User' for convention
const { jwtKey } = require('../keys');  // Changed 'jwtkey' to 'jwtKey' for readability
app.use(express.json());
app.use('/api/users', authRoutes);


module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwtKey, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged in 2" });
        }
        const { userId } = payload;
        const foundUser = await User.findById(userId);
        if (!foundUser) {
            return res.status(404).send({ error: "User not found" });
        }
        req.user = foundUser;
        next();
    });
};
