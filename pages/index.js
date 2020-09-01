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
},[])

const postSize = (post) => {
  post = post.split('')
  let preview = ''
  for(let i = 0; i < 250; i++){
    preview += post[i]
  }
  return preview
}



  return (
    <div className="main-container">
      {
        posts.length ? posts.map((post, index) => {
          return <div key={index} className="post-container">
                    <h1 className="text-2xl font-bold ">{post.title}</h1>
                    <p>{postSize(post.body)}
                    <a className="text-blue-600" href={'/post/' + post._id}>Continue Reading..</a>
                    </p>
                 </div>
        })
        : null
      }
  </div>
)

}
export default Index
