import express from "express";

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.json({status: "OK"})
})


app.listen(port, () => {
  console.log(`Your first docker express backend server running on port ${port}`)
})