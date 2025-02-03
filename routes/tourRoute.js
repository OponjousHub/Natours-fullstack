const express = require("express");
const tourController = require("../controllers/tourController");
const authController = require("../controllers/authController");
const reviewRouter = require("./reviewRoute");
const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router
  .route("/5-cheap-tour")
  .get(tourController.aliasCheapTour, tourController.getAllTours);

router
  .route("/tour-stats")
  .get(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.getTourStats
  );
router
  .route("/monthly-plan/:year")
  .get(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.getMonthlyPlan
  );

router
  .route("/")
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.createTour
  );

router
  .route("/tours-within/:distance/center/:latlng/unit/:unit")
  .get(tourController.getToursWithin);

router.route("/distances/:latlng/unit/:unit").get(tourController.getDistances);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

module.exports = router;
