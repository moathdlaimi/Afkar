import axios from "axios";
import {useRouter} from "next/router";


export const DeleteButton = ( {postid} ) => {
    const Router = useRouter()
    const deletePost = () => {
        axios.delete('api/posts/'+ postid ).then(
            () => {
                Router.reload()
            }).catch((err) => {
                console.log(err)
            }) 
    }
    return <button onClick={deletePost}>DELETE</button>
}

