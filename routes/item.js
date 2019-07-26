const express = require("express");

const router = express.Router();

const Item = require("../models/itemModel");
const userLogin = require("../util/userLogin");

const success = { success: true };
// @route POST item/addItem
// @desc Add an item
// @access Public
router.post("/addItem", (req, res) => {
    userLogin(req.body).then(() => {
        const newItem = new Item({
            username: req.body.username,
            content: req.body.content
        });

        newItem.save().then(() => {
            res.send(success);
        }).catch(err => res.status(404).send(err));

    }).catch(err => res.status(404).send(err));



});

// @route GET item/getItems
// @desc Get items with specified username
// @access Public
router.get("/getItems", (req, res) => {
    const errors = {};
    Item.find(req.body, '-__v').then(items => {
        if (!items || items.length < 1) {
            errors.noItems = "There are no items with this username: " + req.body.username;
            res.status(404).send(errors);
        } else {
            res.send(items);
        }
    }).catch(err => res.status(404).send(err));
});

// @route PUT item/updateItem
// @desc Update an item
// @access Public
router.put("/updateItem", (req, res) => {
    userLogin(req.body).then(() => {
        const errors = {};

        const search = { _id: req.body._id };
        const update = { content: req.body.content };


        Item.find(search).then(items => {
            if (!items || items.length < 1) {
                errors.noItems = "There are no items with this id: " + req.body._id;
                res.status(404).send(errors);
            } else {
                Item.updateOne(search, update).then(item => {
                    if (item.nModified === 1 && item.n === 1) {
                        res.send(success);
                    }
                    else {
                        errors.noUpdate = "Item has not been updated"
                    }
                }).catch(err => res.status(404).send(err));
            }
        }).catch(err => res.status(404).send(err));
    }).catch(err => res.status(404).send(err));

});

// @route DELETE item/delete
// @desc Delete item by id
// @access Public
router.delete("/delete", (req, res) => {
    userLogin(req.body).then(() => {
        const errors = {};
        const search = { _id: req.body._id };

        Item.find(search).then(items => {
            if (!items || items.length < 1) {
                errors.noItems = "There are no items with this id: " + req.body._id;
                res.status(404).send(errors);
            } else {
                Item.deleteOne(req.body).then(deleted => {
                    if (deleted.deletedCount !== 0) {
                        errors.noDelete = "Item have not been deleted";
                        res.status(404).send(errors);

                    } else {
                        res.send(success);
                    }
                }).catch(err => res.status(404).send(err));
            }
        }).catch(err => res.status(404).send(err));
    }).catch(err => res.status(404).send(err));



});

module.exports = router;