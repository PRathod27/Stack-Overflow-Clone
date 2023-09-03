import cors from 'cors'
import bodyParser from 'body-parser'
import  express  from "express";
import mongoose from 'mongoose';
import userRoutes from '../server/routes/users.js'
import questionRoutes from "./routes/Questions.js";
import answerRoutes from './routes/Answers.js';
import userOtpRoutes from './routes/userOtp.js'
import {verifyOtp} from './controllers/userOtp.js'
// import ChatbotRoutes from './routes/Chatbot.js'
// import {Chatbot} from './controllers/Chatbot.js'
import dotenv from 'dotenv'
import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
    apiKey : process.env.api
}) 

const openai = new OpenAIApi(configuration);
const app = express();
dotenv.config();    
app.use(express.json({limit : '30mb',extended : 'true'}))
app.use(express.urlencoded({limit : '30mb',extended : 'true'}))
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res) =>{
    res.send("This is a stack overflow clone API")
// })
})
app.use('/user', userRoutes)
app.post('/userOtp',userOtpRoutes)
app.post('/verifyOtp',verifyOtp)
// app.use('/Chatbot',ChatbotRoutes)
// app.post('/Chatbot',Chatbot)

// app.use('/Chatbot', ChatbotRoutes)
// app.use('/user/sendEmail',sendEmail)
app.use('/questions', questionRoutes) 
app.use('/answers',answerRoutes)

const  PORT = process.env.PORT || 5000


const CONNECTION_URL =  process.env.DATA_URL

mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => app.listen(PORT,() => {console.log( `server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message) )
