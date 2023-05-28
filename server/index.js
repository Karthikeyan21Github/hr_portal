


const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js')
const mongoose = require('mongoose')
const app = express()

app.use((express.json({ limit: "30mb", extended: true})))
app.use((express.urlencoded({ limit: "30mb", extended: true})))
app.use((cors()))

mongoose.connect('mongodb://localhost:27017/hr_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api', userRoutes)
app.listen(4000, () => {
    console.log('Server started on port 3000');
  });
