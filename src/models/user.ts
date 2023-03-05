import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  html_url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  public_repos: {
    type: Number,
    required: true,
  },
  repos_url: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);