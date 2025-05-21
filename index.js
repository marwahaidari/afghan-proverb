const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const postRoutes = require('./routes/postRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', postRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
