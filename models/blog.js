const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
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
    photos: {
        type: Buffer
    },
    docs: {
        type: Buffer
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


const Blog =  mongoose.model("Blog", blogSchema);

module.exports = Blog