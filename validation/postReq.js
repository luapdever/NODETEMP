const { check, validationResult } = require("express-validator");

exports.validatePostReq = (req, res, next) => {
  console.log(req, res, next);
  check("title").notEmpty().withMessage("Write a title");
  check("body").notEmpty().withMessage("Write a body");

  next();
};
