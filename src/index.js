const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://sonuk:kamble123@cluster0.vfrmzq9.mongodb.net/Billeasy-DB', {
  useNewUrlParser: true,
  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use('/api', userRoutes);
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
