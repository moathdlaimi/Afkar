import useForm from '../../utils/useForm'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const EditPostForm = ({ postid }) => {
  const [values, setValues, handleChange] = useForm()
  const router = useRouter()

  useEffect(() => {
      if(!postid){
          return
      }
    axios
    .get('/api/posts/' + postid)
    .then((res) => {
        setValues(res.data.data)
    })
  },[postid])


  const updatePost = (e) => {
      e.preventDefault();
        axios
          .put("/api/posts/" + postid, values)
          .then((res) => {
            router.push('/')
          })
          .catch((err) => {
            console.log(err.message);
          });

    };

  return (
    <form onSubmit={updatePost} className="grid gap-4 p-16">
      <input className="border-4 border-black" type="text" name="title" onChange={handleChange} value={values ? values.title : "" }/>
      <textarea name="body"
                onChange={handleChange}
                value={values ? values.body : ""} className="border-4 border-black">
      </textarea >
      <input type="submit" value="Update Post"/>
    </form>
  )
}

export default EditPostForm 

