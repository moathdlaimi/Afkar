import dbConnect from '../../utils/dbConnect'
import Users from '../../models/user'
import Sessions from '../../models/session'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

dbConnect()


export default async(req, res)=> {
  const { method, body } = req

  switch (method) {
    case "POST":
  try{

    //defining the level of encryption
    const salt = await bcrypt.genSalt(10)

    // hashing the password
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword

    const user = await Users.create(body)
    const session = await Sessions.create({userId: user._id, sessionId:uuidv4()})
    res
    .status(200)
    .json({ success: true, authorization: session.sessionId})
    
  } catch (err){
      res.status(400).json({
      success:false, err:err.message})
  }

      break;
    default:
      res.status(400).json({
            success:false
      })

  }
}
