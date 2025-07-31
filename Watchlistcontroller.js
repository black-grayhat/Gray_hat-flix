import User from "../models/User.js";

export const getWatchlist = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.json(user.watchlist || []);
};

export const addToWatchlist = async (req, res) => {
  const { userId, movieId } = req.body;
  const user = await User.findById(userId);
  if (!user.watchlist) user.watchlist = [];
  if (!user.watchlist.includes(movieId)) {
    user.watchlist.push(movieId);
  }
  await user.save();
  res.json({ message: "Added to watchlist" });
};
