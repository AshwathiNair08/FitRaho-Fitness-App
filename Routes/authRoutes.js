const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../keys');
const router = express.Router();
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
    const { email, password, phone } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, phone });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, jwtKey);
        res.status(201).send({ token });
    } catch (err) {
        res.status(422).send(err.message);
    }
});

router.post('/signin', async (req, res) => {
    const { email, password, Phone } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new user({ email, password: hashedPassword, Phone });
        await newUser.save();

    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email and password" });
    }

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
        return res.status(404).send({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
        return res.status(401).send({ error: "Invalid email or password" });
    }
    
    const token = jwt.sign({ userId: foundUser._id }, jwtKey);
    res.send({ token });
    } catch (err) {
    res.status(422).send(err.message);
    }

});

module.exports = router;
