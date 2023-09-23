import { useParams } from "react-router-dom";
import './UpdateBlog.css'
import AddBlogs from "../AddBlogs/AddBlogs";


const UpdateBlog = () => {

    const params = useParams()

    return ( 
        <AddBlogs id={params.id}/>
     );
}
 
export default UpdateBlog;