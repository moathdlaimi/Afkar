import { useRouter } from 'next/router'
import EditPostForm from '../../../components/forms/editPostForm'

const EditPostPage = () => {


    const router = useRouter()
    const { postid } = router.query

    return <div> 
        <EditPostForm postid={postid} />
        </div>
}

export default EditPostPage