// These routes change pages and link one page to another. 
const path = require('path');
const router = require ('express').Router();

//Pulls router function from express Library and makes path to server JS
router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);


// `GET /notes` should return the `notes.html` file.

module.exports = router