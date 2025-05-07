const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use('/api/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/arsip_mahasiswa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
