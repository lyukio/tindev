const axios = require('axios')
const Dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const {user} = req.headers
        const {devId} = req.params

        const loggedDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId)
        if (!targetDev) return res.status(400).json({error: 'Dev not exists'})

        loggedDev.dislikes.push(targetDev._id)
        if (!await loggedDev.save()) return res.status(422).json({error: 'error on saving user\'s dislikes'})

        return res.json(loggedDev)
    }
}