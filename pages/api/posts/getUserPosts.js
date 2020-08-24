import dbConnect from '../../../utils/dbConnect'
import Posts from '../../../models/post'
import Sessions from '../../../models/session'

dbConnect()

export default async (req, res) => {

    const { method, headers: {
       authorization
    } } = req 
    
    switch (method) {
        case "GET":
            try {
                const session = await Sessions.findOne({
                    sessionId: authorization })
                
                const userPosts = await Posts.find({
                    author:session.userId })
                res.status(200).json({ success:true, userPosts })
            } catch (error) {
                res.status(400).json({ success:false, error: error.message })

            }
            
            break;
        default:
            res.status(400).json({success : false })
            break;
    }
}