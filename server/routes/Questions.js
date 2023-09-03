import express from 'express'

import auth from '../middlewares/auth.js'
import {AskQuestion} from '../controllers/Questions.js' 
import { getAllQuestions } from '../controllers/Questions.js'
import { deleteQuestion, voteQuestion } from '../controllers/Questions.js' 
const router = express.Router()

router.post('/Ask',auth, AskQuestion)
router.get('/get',getAllQuestions)
router.delete("/delete/:id",deleteQuestion)
router.patch('/vote/:id', voteQuestion)

export default router