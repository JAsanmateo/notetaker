// These are the routes that connect Front end to back end in terms of data. 
const router = require ('express').Router();
const db = require ('../db/db.json');

router.get('/notes', (req,res) => {
    db.getNotes().then(data => {res.json(data)}).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/notes', (req,res) => {
    db.saveNotes().then(data => {res.json(data)}).catch(err => {
        res.status(500).json(err)
    })
})


// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

module.exports = router