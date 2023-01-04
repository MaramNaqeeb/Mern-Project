const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); //copy This is new
require('./config/jwt'); //copy This is new

// require('./config/user.config'); //copy This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/dentist.route')(app);
// require('./routes/city.route')(app);
require('./routes/user.route')(app);

// require('./routes/service.route')(app);
const cookies = require('cookie-parser');
app.use(cookies());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

