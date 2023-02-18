const express = require("express");
const app = express();

const citizens = [
    {id: 1, name: "Maria", nationality: "Venezuelan"},
    {id: 2, name: "Luis", nationality: "Colombian"},
    {id: 3, name: "Martha", nationality: "American"},
    {id: 4, name: "Andres", nationality: "Italian"},
    {id: 5, name: "Neil", nationality: "Peruvian"},
];

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/api/citizens", (req, res) => {
    res.send(citizens);
})

app.get("/api/citizens/:id", (req, res) => {
    const filterCitizen = citizens.find(el => el.id === parseInt(req.params.id));
    if (!filterCitizen) res.status(404).send("Id does not exist, please enter a valid one");
    res.send(filterCitizen);
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`))