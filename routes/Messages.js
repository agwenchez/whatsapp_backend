const express = require("express");
const router = express.Router();
const Messages = require("../models/dbMessages");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Messages route works fine" });
});

// create new message
router.post("/new", (req, res) => {
  const data = req.body;

  Messages.create(data, (err,data)=>{
    if(err){
     res.status(500).send(err);
    }
    res.status(201).json(data)
  })

  // const NewMessage = Messages(data); 

  // NewMessage.save()
  //           .then(
  //               message => {
  //               res.status(201).json(message);
  //               console.log(message);
  //           })
  //         .catch(err => console.log(err));

});


// get all messages
router.get('/sync', (req,res)=>{
  Messages.find()
      .then(results =>res.status(200).json(results))
      .catch( err =>{
        if(err){
          res.status(500).json(err);
        }
      })
})

module.exports = router;
