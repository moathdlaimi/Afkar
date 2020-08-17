// import { useState } from "react";
// import axios from "axios";
// import Register from "../pages/register";
// import Link from "next/link";
//
// const verifySession = () => {
//   const [verified, setVerified] = useState({
//     data: (
//       <div>
//         <h1>Loading...</h1>
//       </div>
//     ),
//   });
//
//   const checkForSession = () => {
//     axios
//       .get("/api/session", {
//         headers: {
//           authorization: localStorage.getItem("authorization"),
//         },
//       })
//       .then((res) => {
//         if (res.data.success) {
//           setVerified({
//             success: true,
//           });
//         } else {
//           setVerified({
//             loading: false,
//             success: false,
//             data: (
//               <div>
//                 <h1>Ooops, somethings not right on our end</h1>
//                 <p>
//                   Please{" "}
//                   <Link href="/register">
//                     <a>register</a>
//                   </Link>{" "}
//                   to continue
//                 </p>
//               </div>
//             ),
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         setVerified({
//           data: (
//             <div>
//               <h1>Ooops, somethings not right on our end</h1>
//               <p>
//                 Please{" "}
//                 <Link href="/register">
//                   <a>register</a>
//                 </Link>{" "}
//                 to continue
//               </p>
//             </div>
//           ),
//         });
//       });
//   };
//   return [verified, checkForSession];
// };
// export default verifySession;


import { useState } from "react";
import axios from "axios";


const useVerify = () => {
  const [verified, setVerified] = useState({ loading: true });
  const checkForSession = () => {
    if (localStorage.getItem("authorization") === null) {
      setVerified(false);
      return;
    }
    axios
      .get("/api/session", {
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      })
      .then((res) => {
        if (res.data.success) {
          setVerified(true);
        } else {
          setVerified(false);
        }
      })
      .catch((err) => {
        setVerified(false);
      });
  };
  return [verified, checkForSession];
};
export default useVerify;
