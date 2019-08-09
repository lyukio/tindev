const express = require("express")
const DevController = require('./controllers/dev')
const LikeController = require('./controllers/like')
const DislikeController = require('./controllers/dislike')

const routes = express.Router()

routes.get("/devs", DevController.index)
routes.post("/devs", DevController.store)
routes.post("/devs/:devId/likes", LikeController.store)
routes.post("/devs/:devId/dislikes", DislikeController.store)

module.exports = routes