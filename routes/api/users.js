const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  // .get(userController.loginUser)
  .post(userController.registerUser)
//   .post(userController.create);

// // Matches with "/api/books/:id"
router
  .route("/login")
  .post(userController.loginUser)

module.exports = router;
