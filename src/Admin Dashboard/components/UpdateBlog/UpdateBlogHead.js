import { Link } from "react-router-dom";

const UpdateBlogHead = () => {
    return ( 
        <div className="container my-5">
            <div className="row" >
                <div className="col d-flex"><button><Link to={'/products'}>Go to Blogs</Link> </button></div>
                <div className="col"><h2>Update Blog</h2></div>
                <div className="col d-flex justify-content-end"><button>Update Now</button></div>
            </div>
        </div>
     );
}
 
export default UpdateBlogHead;