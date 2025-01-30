const express = require("express");
const tourController = require("../controllers/tourController");
const authController = require("../controllers/authController");
const reviewRouter = require("./reviewRoute");
const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router
  .route("/5-cheap-tour")
  .get(tourController.aliasCheapTour, tourController.getAllTours);

router.route("/tour-stats").get(tourController.getTourStats);
router.route("/monthly-plan/:year").get(tourController.getMonthlyPlan);

router
  .route("/")
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

module.exports = router;
