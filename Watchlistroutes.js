import express from "express";
import { getWatchlist, addToWatchlist } from "../controllers/watchlistController.js";
const router = express.Router();

router.get("/:userId", getWatchlist);
router.post("/", addToWatchlist);

export default router;
