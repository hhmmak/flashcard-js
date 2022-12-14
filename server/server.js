const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./config/mongoose.config');
require('./routes/flashcard.routes')(app);

app.listen(port, () => console.log(`Listening on port : ${port}`));