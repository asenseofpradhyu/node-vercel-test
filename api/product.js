const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    
    try{
        res.json({
            status:200,
            message:"Hello World !!"
        });
    } catch(error) {
        console.log(error);
        return res.status(500).send("Server Error");
    }
})

module.exports = router;