const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api/citizens", (req, res) => {
    res.send([1,2,3]);
})

app.get("/api/citizens/:id", (req, res) => {
    res.send(req.params.id)
})

app.get("/api/citizens/:year/:month", (req, res) => {
    res.send(req.params)
})


// quety allows to send query string parameters 
// by adding sortBy="string" in the url
app.get("/api/other/:ramdom", (req, res) => {
    res.send(req.query)
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`))