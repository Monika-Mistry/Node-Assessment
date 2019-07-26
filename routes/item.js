const express = require("express");

const router = express.Router();

const Item = require("../models/itemModel");

// @route POST item/addItem
// @desc Add an item
// @access Public

// @route GET item/username
// @desc Get items with specified username
// @access Public

// @route PUT item/updateItem
// @desc Update an item
// @access Public

// @route DELETE item/deleteItem
// @desc Delete items with specified username
// @access Public

module.exports = router;