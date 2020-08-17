import useForm from '../../utils/useForm'
import axios from 'axios'
import { useRouter } from 'next/router'

const PostForm = () => {
  const [values, setValues, handleChange] = useForm()
  const router = useRouter()

  const createPost = (e) => {
      e.preventDefault();
        axios
          .post("/api/posts", values,{ headers:
            {authorization:localStorage.getItem('authorization')}
          })
          .then((res) => {
            router.push('/')
          })
          .catch((err) => {
            console.log(err.message);
          });

    };

  return (
    <form onSubmit={createPost} className="grid gap-4 p-16">
      <input className="border-4 border-black" type="text" name="title" onChange={handleChange} value={values ? values.title : "" }/>
      <textarea name="body"
                onChange={handleChange}
                value={values ? values.body : ""} className="border-4 border-black">
      </textarea >
      <input type="submit" value="Create Post"/>
    </form>
  )
}

export default PostForm
