import Sessions from '../../models/session'
import Users from '../../models/user'

export default async (req, res) => {
  const { method,
    headers:{authorization}
  } = req

  switch (method) {
    case "GET":
      try {
          const session = await Sessions.findOne({sessionId: authorization})
          if(session.sessionId && session.userId){
            res.status(200).json({ success:true })
          } else {
            res.status(400).json({ success:false })
          }
      } catch(err){
          res.status(400).json({ success: false, error: e.message})

      }

      break;
    default:
      res.status(400).json({ success:false })

  }
}
