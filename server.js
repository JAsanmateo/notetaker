const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Connect Server Routes folders



// This part brings in Express where we are connecting to. 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);



// Middleware 


// This is the code that tells the port to listen
app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});

