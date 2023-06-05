const express = require("express");
const { createUserController } = require("../controllers/userController");
const router = express.Router();

router.post('/create', createUserController)

router.get('/', async (req, res) => {
        const users = await Users.find();
        res.json(users[0])
    })

module.exports = router;