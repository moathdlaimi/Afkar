import {useEffect,useState}  from 'react';
import axios from 'axios'
import { DeleteButton } from '../../components/buttons/index';

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
        <div className="dashboard-main-container">
          <a className="new-post-btn" href={`dashboard/newPost/`}> + New Post</a>
            {posts ? posts.map((post,index) => {
                return <div key={index} className="dashboard-post-container"> 
                    <h1 className="text-lg font-bold">{post.title}</h1>   
                    <div>
                    <DeleteButton postid={post._id} /> 
                    <a href={`dashboard/editPost/${post._id}`}> EDIT</a> 
                    </div>
                 </div>
            }): null } 
        </div>
    );
}

export default Dashboard;
