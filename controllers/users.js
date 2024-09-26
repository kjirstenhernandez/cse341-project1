const mongodb = require("../data/database");
const ObjectId = require('mongodb'); //primary key for MongoDB, only if you're using Mongo's generated ID

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    })
};

const getSingle = async (req, res) => {
    const userId = req.params.id;
    const result = await mongodb.getDatabase().db().collection('Contacts').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

const createUser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const response = await mongodb.getDatabase().db().collection('Contacts').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the user')
    }
}

const updateUser = async (req, res) => {
    const userId = (req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }

    const response = await mongodb.getDatabase.db().collection('Contacts').updateOne({_id: userId}, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user')
    }
}

const deleteUser = async (req, res) => {
    const userId = (req.params.id);
    const response = await mongodb.getDatabase.db().collection('Contacts').deleteOne({_id: userId});

    if (response.deletedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user') 
    }
}


module.exports = { getAll, getSingle, createUser, updateUser, deleteUser }