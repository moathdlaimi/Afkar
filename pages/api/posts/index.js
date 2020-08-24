import dbConnect from '../../../utils/dbConnect'
import Posts from '../../../models/post'
import Sessions from '../../../models/session'

dbConnect()

export default async (req,res) =>
{ 
  const {method, body, headers: {authorization}} = req

  switch (method) {
    case "GET":
      try {
          const posts = await
          Posts.find({})
          res.status(200).json({success:true, data:posts})
      } catch(err) {
          res.status(400).json({
            success:false})
      }
      break

      case "POST":
        try {
            const session = await Sessions.findOne({
              sessionId: authorization
            })

            body.author = session.userId


            const newPost = await
            Posts.create(body)
            res.status(200).json({success:true, data:newPost})
        } catch(err) {
            res.status(400).json({
              success:false})
        }

      default:
        res.status(400).json({
          success:false
        })
        break

  }
}
