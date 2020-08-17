import NewPostForm from '../../components/forms/NewPostForm'
import useVerify from '../../utils/useVerify'
import { useEffect } from 'react'

const NewPost = () => {
  const [ verified, checkForSession ] = useVerify()

  useEffect(() => {
    checkForSession()
  }, [])

  if(verified){
    return (
      <div>
        <h2>MAKE NEW POST</h2>
        <NewPostForm/>
      </div>
    )
  } else {
    return <div>You need to login to access this page</div>
  }
}
export default NewPost
