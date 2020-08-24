import Link from 'next/link'
import verifySession from '../utils/useVerify'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Index = () => {
  // const [ verified, checkForSession ] = verifySession()
  //
  // useEffect(() => {
  //   checkForSession()
  // }, [])
  //
  // if(!verified){
  //   return <div> <h1>You need to log in</h1> </div>
  // }
const [ posts, setPosts ] = useState([])

useEffect(() => {
    axios.get('api/posts').then((res) => {
      setPosts(res.data.data)
    }).catch((err) => {
      console.log(err);
    })
})


  return (
    <div className="flex gap-8 p-10">
      {
        posts.length ? posts.map((post, index) => {
          return <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post._id}</p>
                    <p>{post.author}</p>
                 </div>
        })
        : null
      }
  </div>
)

}
export default Index
