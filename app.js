const express = require("express");
const app = express();

const citizens = [
    { id: 1, nationality: "Colombian"},
    { id: 2, nationality: "American"},
    { id: 3, nationality: "Venezuelan"},
    { id: 4, nationality: "Peruvian"},
    { id: 5, nationality: "Mexican"},
]

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api/citizens", (req, res) => {
    res.send(citizens);
})

app.get("/api/citizens/:id", (req, res) => {
    const citizensId = citizens.find(el => el.id === parseInt(req.params.id));
    if(!citizensId) res.status(404).write("The given ID doesn't belong to any citizen");
    res.send(citizensId);
})

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}...`))