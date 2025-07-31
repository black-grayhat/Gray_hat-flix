import express from "express";
import { getMovies, addMovie } from "../controllers/movieController.js";
const router = express.Router();

router.get("/", getMovies);
router.post("/", addMovie);

export default router;
