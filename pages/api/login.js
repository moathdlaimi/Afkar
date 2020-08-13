// import dbConnect from '../../utils/dbConnect'
// import Users from '../../models/user'
// import Sessions from '../../models/session'
// import { v4 as uuidv4 } from 'uuid'
// import bcrypt from 'bcrypt'
//
// dbConnect()
//
// export default async ( req, res ) => {
//   const { method, body } = req
//   console.log('method');
//   switch (method){
//     case "POST":
//       try {
//         const user = await Users.findOne({email:body.email})
//         const validPassword = await bcrypt.compare(body.password, user.password)
//
//         const session = await Sessions.create({userId: user._id, sessionId: uuidv4()})
//           res.status(200).json({ success:true, authorization: session.sessionId })
//       } catch(err) {
//           res.status(400).json({ success: false, error: err.message})
//       }
//       break
//       default:
//         res.status(400).json({ success:false })
//   }
// }

import Users from "../../models/user";
import Sessions from "../../models/session";
import dbConnect from "../../utils/dbConnect";
import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case "POST":
      try {
        const user = await Users.findOne({ email: body.email });

        const validPass = await bcrypt.compare(body.password, user.password);

        const session = await Sessions.create({
          userId: user._id,
          sessionId: uuidv4(),
        });

        res
          .status(200)
          .json({ success: true, authorization: session.sessionId });
      } catch (e) {
        res.status(400).json({ success: false, error: e.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
