import { ChatMistralAI } from "@langchain/mistralai";
import { config } from "dotenv";
import rl from "readline/promises"
import { HumanMessage , AIMessage,AIMessageChunk ,SystemMessage ,tool , createAgent} from "langchain";
import * as z from "zod"
import { tavily } from "@tavily/core";
config()

// help us to connect the ai agent to web (internet)
const tvly = tavily({ apiKey: process.nextTick.TAVILY_API_KEY });

async function getLatestinformation({query}){

    const response = await tvly.search(query)

    const results = response.results
    const content = results.map(result =>result.content ).json("\n\n")
    return content
}

const getLatestinformationTool =tool(
    getLatestinformation,
    {
        // name of tool
        name:"get_latest_information",
        description:"Get latest information about any topic",
        schema:z.object({
            query:z.string().describe("The topic to get latest information about")
        })
    }
)

// it create chat like terminal
const readline = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})

//mistral llm
const model = new ChatMistralAI({
    model:"mistral-small-latest",
    apikey:process.env.MISTRAL_API_KEY
})

const agent = createAgent({
    model,
    tool:[getLatestinformation]
})

// storing the conversation in array (we import HumanMessages and AIMessages from langchain)
const messages = [
    // System instruction -- how the LLM will behave + additional information (like the current date)
    new SystemMessage(`
        Your name is Deno. You are a joyful senior developer who loves to explain things related to MERN and 
        if someone asks about general knowledge, act like a professor and explain it in simple terms.

        Current date is ${new Date().toLocaleDateString()}
    `)
]

while(true){
    const userPrompt = await readline.question("User: ")
    
    messages.push(new HumanMessage(userPrompt))

    // stream method -  ek ek word ata rahega  (llm work like this)
// invoke method - hame sara response ek baar me deta h 

    const stream = await agent.stream({
        messages,  
    },{
        streamMode:"messages"
    })

    let aiResponse =""
    
    for await (const [ chunk ] of stream){
       
        if(chunk instanceof AIMessageChunk){
            // console.log(chunk.text) --- it dont give response in formate 
            process.stdout.write(chunk.text)

            aiResponse += chunk.text
        }
    
      
    }

    messages.push(new AIMessage(aiResponse))

 // goes to next line so the one line respone do not disappear
    process.stdout.write("\n")
}