import {BiEditAlt} from 'react-icons/bi' 
import {BsFillTrashFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteBlogMutation } from '../../../features/Blogs/BlogApiSlice';
import dateFormat from 'dateformat';

const BlogCard = ({blog}) => {
    

   const [deleteBlog] = useDeleteBlogMutation()

   const handleDelete = async() => {
    if(window.confirm("Do you want to delete this Blog?")){

        await deleteBlog(blog?._id)
        window.location.reload(false)
    }

   }

    return ( 
        <div className="col-md-6 col-lg-3 col-11 text-center mb-4">
        <div className="singleBlog border p-2">
            <div className="productImg d-flex justify-content-center">
                <img src={blog.thumbnail}/>
            </div>
            <div className="productName">{blog?.title}</div>
            <div className="price fw-bold">{dateFormat(blog?.createdAt, "mmmm dS, yyyy") }</div>
            <div className="buttons">
                <Link to={`/tableaudebord/blog/update/${blog?._id}`}><button className='edit'><BiEditAlt/> </button></Link>
                <button className='delete' onClick={()=> handleDelete()}><BsFillTrashFill/></button>
            </div>
        </div>
        </div>
     );
}
 
export default BlogCard;