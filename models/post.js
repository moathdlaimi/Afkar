const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema ({
  title: {
      type:String,
      required:[true,"Title is required"],
      maxlength:100,
    },

  body: {
    type: String,
    required: [true,"Author is required"],
  },
  author: {
    type: String,
    required: [true,"Author is required"],
  },

})


export default mongoose.models.Post ||
mongoose.model("Post", PostSchema)
