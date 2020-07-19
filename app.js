const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const appRouter = require('./routes/routes');
app.use(cors());

mongoose.connect(
  'mongodb+srv://mohaned:98898685968996@cluster0-hsoop.azure.mongodb.net/emaily?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set('useCreateIndex', true);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', appRouter);
app.get('/', (req, res) => {
  res.send('invalid endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
