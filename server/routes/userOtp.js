import  express from "express";

import { userOtp } from '../controllers/userOtp.js'

const router = express.Router();

router.post('/userOtp',userOtp)

export default router