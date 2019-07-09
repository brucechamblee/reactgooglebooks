const express = require("express");
const router = require("express").Router();
const googleController = require("../../controllers/google");

router.route('/').get(googleController.findAll);

module.exports = router;