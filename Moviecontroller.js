import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const addMovie = async (req, res) => {
  const { title, description, category, posterUrl, videoUrl } = req.body;
  const movie = new Movie({ title, description, category, posterUrl, videoUrl });
  await movie.save();
  res.json({ message: "Movie added" });
};
