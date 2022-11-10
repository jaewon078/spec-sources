const data = require("../data")
module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    get_source: (req, res) => {
        //sources.find();
        res.json({"message": "get_sources okay", data: data.sources})
    },
    add_source:(req, res) => {
        data.sources.push(req.body.source);
        res.json({"message": "add_source okay", data: data.sources});
    },
    delete_source:(req, res) => {
        data.sources = data.sources.filter(s => s.id !== req.params.id);
        res.json({"message": "delete_source okay", data: data.sources});
    }


};