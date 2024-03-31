const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./UserRoutes'); // Import the user routes

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRoutes); // Use the user routes under the '/api' prefix

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
