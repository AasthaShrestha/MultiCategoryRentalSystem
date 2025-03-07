const express = require("express");
const multer = require ("multer");
const {
  createRental,
  searchRentals,
  getAllRentals,
  getRentalsByCategory,
  getLatestRentals,
  getRentalById,
} = require( "../controller/rental.controller");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// Routes
router.post("/", upload.array("images", 5), createRental);

router.get("/searchSection", searchRentals);
router.get("/", getAllRentals);
router.get("/vehicles", (req, res) =>
  getRentalsByCategory("Vehicles", req, res)
);
router.get("/rooms", (req, res) =>
  getRentalsByCategory("Real Estate", req, res)
);
router.get("/latest", getLatestRentals);
router.get("/:id", getRentalById);

module.exports = router;
