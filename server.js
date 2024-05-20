const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://acuspikecris:MOL628826@clustercris.shb0f7p.mongodb.net/cdj-socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
