const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hungry', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Define routes
const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter);

const dishesRoute = require('./routes/dishes');
app.use('/api/dishes', dishesRoute);

const  createDb  = require('./routes/admin');
app.get('/', createDb);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
