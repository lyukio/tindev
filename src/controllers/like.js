const axios = require('axios')
const Dev = require('../models/dev');
// const Like = require('../models/like');

module.exports = {
    async store(req, res) {
        const {user} = req.headers
        const {devId} = req.params

        const loggedDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId)
        if (!targetDev) return res.status(400).json({error: 'Dev not exists'})
        
        if (targetDev.likes.includes(loggedDev._id)) console.log("deu match");

        loggedDev.likes.push(targetDev._id)
        if (!await loggedDev.save()) return res.status(422).json({error: 'error on saving user\'s likes'})

        return res.json(loggedDev)
    }
}