const mongodb = require("../data/database");
const ObjectId = require('mongodb').ObjectId; //primary key for MongoDB

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    })
};

const getSingle = async (req, res) => {
    const userId = new ObjectId.createFromHexString(req.params.id);
    const result = await mongodb.getDatabase().db().collection('Users').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};


module.exports = { getAll, getSingle }