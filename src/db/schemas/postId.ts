
const mongoose = require("mongoose");

export const postIdSchema = mongoose.Schema({
  postId: String,
  url: String,
  createdAt: Number,
});