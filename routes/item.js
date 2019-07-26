const express = require("express");

const router = express.Router();

const Item = require("../models/itemModel");

// @route POST item/addItem
// @desc Add an item
// @access Public

// @route GET item/getItems
// @desc Get items with specified username
// @access Public
router.get("/getItems", (req, res) => {
    const errors = {};
    Item.find(req.body).then(items => {
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