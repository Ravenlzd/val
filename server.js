const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let responses = [];

app.post("/api/choice", (req, res) => {
    responses.push(req.body);
    console.log("New choice:", req.body);
    res.sendStatus(200);
});

app.get("/api/responses", (req, res) => {
    res.json(responses);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
