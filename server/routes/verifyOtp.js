import  express from "express";

import { verifyOtp } from '../controllers/userOtp.js'

const router = express.Router();
router.post('/verifyOtp',verifyOtp)

export default router