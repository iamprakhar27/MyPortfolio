import express from "express"
import{addcontact} from '../controllers/common_controller.js'

const common_route = express.Router()
common_route.post("/addcontact",addcontact)

export default common_route