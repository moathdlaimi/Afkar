import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SessionSchema = new Schema({
  userId: { type:String},
  sessionId: { type:String, required: true },
})

export default mongoose.models.Session ||
mongoose.model("Session", SessionSchema)
