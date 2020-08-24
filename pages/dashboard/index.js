import {useEffect,useState}  from 'react';
import axios from 'axios'

const Dashboard = () => {
    const [ posts, setPosts ] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('authorization') === null){
          return;
        } else {
          axios.get('/api/posts/getUserPosts', {
            headers: {
                authorization: localStorage.getItem('authorization')
            },  
          }).then((res) => {
              setPosts(res.data.userPosts)
              console.log(res)
          })
        }
      }, [])

    return (
        <div>
            {posts ? posts.map((post,index) => {
                return <div key={index}> {post.title} </div>
            }): null } 
        </div>
    );
}

export default Dashboard;
