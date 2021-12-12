const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    categories: {
      type:Array
    },
  },
  { timestamps: true }
);

const Post =  mongoose.model("Post", postSchema);

module.exports = Post