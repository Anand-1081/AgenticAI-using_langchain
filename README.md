# 🤖 Agentic AI using LangChain & LLM Integration

An **Agentic AI application** built with **LangChain** and **LLM integration** that demonstrates how AI agents can understand user instructions, reason about tasks, use tools, and generate intelligent responses.

The project focuses on building an AI agent capable of interacting with an LLM and executing actions through integrated tools rather than simply generating static text.

---

## 🚀 Features

* 🤖 **AI Agent Architecture**
* 🧠 **LLM Integration**
* 🔗 **LangChain Framework**
* 🛠️ **Tool Calling**
* 📋 **Structured Outputs**
* 🔐 **Environment Variable Configuration**
* 💬 **Interactive CLI-based AI interaction**
* ⚡ **Asynchronous JavaScript support**
* 🧩 **Zod-based schema validation**

---

## 🏗️ Project Architecture

```text
User
  │
  ▼
┌─────────────────┐
│   User Query    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   LangChain     │
│     Agent       │
└────────┬────────┘
         │
         ├──────────────► Tools
         │
         ▼
┌─────────────────┐
│       LLM       │
│  (Mistral AI)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Agent Response  │
└─────────────────┘
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| **Node.js**    | JavaScript runtime              |
| **JavaScript** | Application development         |
| **LangChain**  | Agent and LLM orchestration     |
| **Mistral AI** | Large Language Model            |
| **Zod**        | Schema validation               |
| **dotenv**     | Environment variable management |
| **Readline**   | CLI interaction                 |

---

## 📂 Project Structure

```text
AgenticAI-using-langchain/
│
├── index.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Anand-1081/AgenticAI-using-langchain.git
```

### 2. Navigate to the project

```bash
cd AgenticAI-using-langchain
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file:

```env
MISTRAL_API_KEY=your_api_key_here
```

> ⚠️ Never commit your `.env` file or API keys to GitHub.

---

## ▶️ Run the Project

Start the application using:

```bash
node index.js
```

The application will start an interactive AI session where you can provide prompts to the agent.

---

## 🧠 How It Works

The application follows an agent-based workflow:

### 1. User Input

The user provides a natural-language query through the command line.

### 2. Agent Processing

LangChain passes the request to the configured AI agent.

### 3. LLM Reasoning

The LLM interprets the request and determines how it should respond or whether a tool should be used.

### 4. Tool Calling

When required, the agent can invoke an available tool to perform a specific task.

### 5. Final Response

The result is processed and returned to the user as an AI-generated response.

---

## 🔗 LangChain Integration

LangChain is used to connect the application with the LLM and provide the agent framework.

Example:

```javascript
import { ChatMistralAI } from "@langchain/mistralai";

const model = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 0,
});
```

The model can then be integrated with an agent and tools.

---

## 🧰 Tool Calling

One of the important concepts demonstrated in this project is **tool calling**.

Tools allow an AI agent to perform actions beyond simply generating text.

Conceptually:

```text
User Query
     ↓
    Agent
     ↓
   Decide
  ↙      ↘
LLM     Tool
  ↘      ↙
   Result
     ↓
Final Response
```

This makes the application more **agentic** compared with a simple chatbot.

---

## 📦 Important Dependencies

The project uses packages such as:

```bash
npm install langchain @langchain/mistralai zod dotenv
```

Depending on the implementation, additional LangChain packages may be required.

---

## 🔐 Environment Variables

The project uses environment variables to keep sensitive credentials outside the source code.

Example:

```env
MISTRAL_API_KEY=your_mistral_api_key
```

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
node_modules/
```

---

## 🎯 Learning Objectives

This project helped me understand:

* What **Agentic AI** is
* How LLMs can be integrated into applications
* How **LangChain** works
* AI agent architecture
* Tool calling
* Structured output generation
* Zod schema validation
* Environment variable management
* Interactive AI applications with Node.js
* The difference between a basic LLM application and an agent-based application

---

## 🔮 Future Improvements

Planned improvements include:

* [ ] Add more custom tools
* [ ] Add memory and conversation history
* [ ] Add web search capabilities
* [ ] Add RAG (Retrieval-Augmented Generation)
* [ ] Add database integration
* [ ] Add a web-based UI
* [ ] Add streaming responses
* [ ] Add multiple specialized agents
* [ ] Add authentication
* [ ] Deploy the application

---

## 📸 Demo

Add screenshots or a demo GIF here:

```markdown
![Agentic AI Demo](./screenshots/demo.png)
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push your branch

```bash
git push origin feature/new-feature
```

6. Open a Pull Request

---

## 📄 License

This project is open-source and available for educational and learning purposes.

---

## 👨‍💻 Author

**Anand Jha**

* GitHub: [Anand-1081](https://github.com/Anand-1081)
* Project: [Agentic AI using LangChain](https://github.com/Anand-1081/AgenticAI-using-langchain)

---

⭐ If you found this project useful, consider giving it a **star** on GitHub!
