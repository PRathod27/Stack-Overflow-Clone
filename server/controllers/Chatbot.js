
// import {Configuration, OpenAIApi} from 'openai';


// const configuration = new Configuration({
//     apiKey : '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'
// }) 

// const openai = new OpenAIApi(configuration);

// // app.post("/Chatbot", async)
// export const Chatbot = async (req,res) => {
//     const {chats} = req.body;

//     const result = await openai.createChatCompletion({
//         model : 'gpt-3.5-turbo',
//         messages : [
//             {
//                 role : "system",
//                 content: "I am a Chatbot, ask me anything"
                
//             },
//         ],
//         ...chats
//     })
//     res.json({
//         output : result.data.choices[0].message,
//     })
// }

