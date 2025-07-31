import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  posterUrl: String,
  videoUrl: String
});

export default mongoose.model("Movie", movieSchema);
