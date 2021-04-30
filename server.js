const express = require("express");
const app = express();

const posts = [
    {
        name: "Avanish",
        post: "Post 1"
    },
    {
        name: "Andy",
        post: "Post 2"
    }
];

app.get("/posts", (req, res)=> {
    res.json(posts);
});


app.listen(3000);