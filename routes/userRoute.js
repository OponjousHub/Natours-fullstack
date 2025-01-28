const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotpassword", authController.forgotPassword);
router.patch("/resetPassword/:resetToken", authController.resetpassword);
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.patch("/updateMe", authController.protect, userController.updateUser);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .get(authController.protect, userController.getUser)
  .patch(userController.updateUser)
  .delete(authController.protect, userController.deleteMe);

module.exports = router;
