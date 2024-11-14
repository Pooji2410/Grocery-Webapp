const mongoose = require("mongoose");

// Connection string
mongoose.connect('mongodb+srv://dharshinijai6:Priya140404@cluster0.u0eyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('No connection:', err));
