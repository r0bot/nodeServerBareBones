var express = require('express');
var router = express.Router();

module.exports = function () {
    var UsersController = require('./../../controllers/Users/UsersController')();

    router.route('/')
        .get(getAllUsers)
        .post(createUser);

    router.route('/:id')
        .get(getUserById)
        .put(updateUser)

    function getAllUsers(){
        UsersController.getAll(function(error, users){
            if(error){
                res.json(error);
            }
            res.json(users);
        });
    }

    function createUser(req, res){
        var userData = req.body;

        UsersController.createUser(userData, function(error, createdUser){
            if(error){
                res.json(error);
            }
            res.json(createdUser);
        });
    }

    function getUserById(req, res){
        var params ={
            id: req.params.id,
            propertiesToUpdate: req.body
        };

        UsersController.getById(params, function(error, user){
            if(error){
                res.json(error);
            }
            res.json(user);
        });
    }

    function updateUser(req, res){
        var id = req.params.id;

        UsersController.updateById(id, function(error, user){
            if(error){
                res.json(error);
            }
            res.json(user);
        });
    }

    return router;
};