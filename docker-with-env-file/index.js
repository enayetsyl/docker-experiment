require("dotenv").config();           // 🔑 load .env variables
const express = require("express");
const app = express();
const PORT = process.env.PORT 

app.get("/", (_, res) => res.send(`Hello from port ${PORT}!`));

app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));