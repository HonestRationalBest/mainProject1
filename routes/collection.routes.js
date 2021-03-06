const { Router } = require('express');
const Collections = require('../models/Collections');
const router = Router()


router.get("/collecion/:collectionId", async (req, res) => {

    const id = req.params.collectionId
    Collections.find(
        {
            _id: id
        },
        async (err, myData) => {
            if (err) return console.log(err);
            return res.send(myData)
        }
    )
});


router.delete("/delete_collection/:id", async (req, res) => {

    const id = req.params.id
    Collections.deleteOne(
        {
            _id: id
        },
        async (err, myData) => {
            if (err) return console.log(err);
            return res.send(myData)
        }
    )
})

module.exports = router
