const express = require("express");
const Datastore = require("nedb")
const bodyParser = require("body-parser");

const app=express();
const db = new Datastore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.get("/", (req,res) => {
//     res.end("hello world! This is Serena's API")
// })
let id = 1;

app.post("/create", (req,res) => {
    console.log("\nCreate - Post");
    let item = {name : req.body.name, _id : id}
    id++;
    db.insert(item, (err, item) => {
        if (err) res,send(err);
        res.status(201).send(item);
        console.log(`Created item: ${JSON.stringify(item)}`)
    })

})


app.get("/read", (req,res) => {
    console.log("\nRead - GET")
    let item = {name : req.body.name}
    db.find({}, (err, items) => {
        if (err) res,send(err);
        res.status(200).send(items);
        console.log(`Reading item: ${JSON.stringify(items)}`)
    })

})


app.get("/read/:id", (req,res) => {
    console.log("\nRead - GET")
    let item = {name : req.body.name}
    db.find({_id : parseInt(req.params.id)}, (err, item) => {
        if (err) res,send(err);
        res.status(200).send(item);
        console.log(`Reading item: ${JSON.stringify(item)}`)
    })

})

app.delete("/delete/:id", (req,res) => {
    console.log("\ndelete - DELETE");
    db.remove({_id : parseInt(req.params.id)}, (err, itemID) => {
        if (err) res.send(err);
        res.sendStatus(204);
        console.log(`Deleted item: ${JSON.stringify(itemID)}`);
    });
});


app.listen(8080), () => {
    console.log("running on localhost:8080")
}

//$ curl -s -X POST -H 'Content-type:application/json' -d '{"name":<name>}' http://localhost:8080/create
//$ curl -s -X GET  http://localhost:8080/read  
//$ curl -s -X GET  http://localhost:8080/read/<id>
//$ curl -s -X DELETE  http://localhost:8080/delete/<id>