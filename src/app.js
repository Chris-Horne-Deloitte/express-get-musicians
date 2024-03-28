const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (req, res) => {
    const allMusc = await Musician.findAll();
    res.json(allMusc)
})

app.get("/musicians/:id", async (req, res) =>{
    const id = await Musician.findByPk(req.params.id);
    res.json(id)
})

app.use(express.json());
app.use(express.urlencoded());

app.post("/musicians", async (req, res) =>{
    const newMus = await Musician.create(req.body);
    res.json(newMus)
})

app.put("/musicians/:id", async (req, res) =>{
    const updatedMus = await Musician.update(req.body, ({where: {id: req.params.id}}))
    res.json(updatedMus)
})

app.delete("/musicians/:id", async (req, res) =>{
    const deletedMus = await Musician.destroy({where: {id: req.params.id}})
    res.json(deletedMus)
})

module.exports = app;