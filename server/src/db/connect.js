const mongoose = require("mongoose");

// Connection string
mongoose.connect('mongodb+srv://manjudharshu54:Dharshini123@dharshistores.hde5r.mongodb.net/stores?retryWrites=true&w=majority&appName=dharshistores', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('No connection:', err));
