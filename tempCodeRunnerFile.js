const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const { mongoUrl } = require('./keys');

require('./models/User');
const authRoutes = require('./Routes/authRoutes');
const requireToken = require('./middleware/requireToken');

app.use(express.json());
app.use('/api/users', authRoutes); // ensure route prefix here matches AuthService

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.log("Error connecting to MongoDB:", err);
});

app.get('/', requireToken, (req, res) => {
  res.send(`Welcome ${req.user.email}, you are logged in.`);
});
