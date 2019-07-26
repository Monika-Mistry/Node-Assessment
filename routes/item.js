const express = require("express");

const router = express.Router();

const Item = require("../models/itemModel");

const success = { success: true };
// @route POST item/addItem
// @desc Add an item
// @access Public
router.post("/addItem", (req, res) => {
    const newItem = new Item({
        username: req.body.username,
        content: req.body.content
    });

    newItem.save().then(() => {
        res.send(success);
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

// @route DELETE item/deleteItem
// @desc Delete items with specified username
// @access Public

module.exports = router;