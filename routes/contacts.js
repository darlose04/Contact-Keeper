const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all users' contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route PUT api/contacts/:id
// @desc Update a contact
// @access Prvi==ivate
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE api/users/:id
// @desc Delete a user
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
