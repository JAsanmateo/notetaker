// These are the routes that connect Front end to back end in terms of data. 
const router = require ('express').Router();
const db = require ('../db/db.json');
const {v4:uuidv4}= require("uuid");
const path = require("path")
const fs = require ("fs")

router.get('/notes', (req,res) => res.json(db));
   
router.post('/notes', (req,res) => {
    let newNote = req.body;

    console.log("mynewnote",newNote);
    let myNewNote ={
        id: uuidv4(),
        title: newNote.title,
        text:newNote.text,
    }

    db.push(myNewNote);
    console.log(db);
fs.writeFileSync(path.join(__dirname,"../db/db.json"),JSON.stringify(db,null,2));

res.json(true);
 
});


// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

module.exports = router