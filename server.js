require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const connectDB = require('./config/dbconfig');
connectDB();

// import routes
const { renderClient, productRoute } = require('./routes');

// -- apply middlewares --
const corsOptions = {
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '500kb' }));
app.use(express.urlencoded({ limit: '500kb', extended: true }));

// serve static folder to serve files
app.use(express.static(path.resolve(__dirname, 'client/build')));

// ROUTES
app.use('/', renderClient);

// API Route
app.use('/api', productRoute);

// production build for reactjs
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server listening at port ${PORT}...`));
