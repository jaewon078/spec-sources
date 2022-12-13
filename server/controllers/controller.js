const data = require('../data');
const sources = require('../models/SourceModel')

module.exports = {
    hello: (req, res) => {
        res.json({"message": "hello"});
    },
    add_source: (req, res) => {
        sources.create(req.body)
        .then(sourcesData =>{
            sources.find({})
            .then(sourcesData => {
                console.log(sourcesData);
                res.json({"message": "WORKING3", data: sourcesData});
            })
            .catch(err=>{
                console.log(err);
                res.json(err);
            })
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    sources: (req,res)=>{
        sources.find({})
        .then(sourcesData => {
            console.log(sourcesData);
            res.json({"message": "HELLO", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
        
    },
    testing: (req,res) =>{
        res.json({"message": "WORKING"})
    },
    delete_source: (req, res) => {
        console.log(req.params.id) // name not id
        sources.findOneAndDelete({name: req.params.id})
        .then(sourcesData => {
            sources.find({})
            .then(sourcesData => {
                console.log(sourcesData);
                res.json({"message": "WORKING2", data: sourcesData});
            })
            .catch(err=>{
                console.log(err);
                res.json(err);
            })
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
};
