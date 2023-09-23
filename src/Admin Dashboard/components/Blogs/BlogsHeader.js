import { Link } from "react-router-dom";

const BlogsHeader = () => {
    return ( 
        <div className="productsHeader d-flex justify-content-between align-items-center py-4">
            <div><h2>Blogs</h2></div>
            <div><button><Link to={'/tableaudebord/addblogs'}>Créer un Nouveau blog</Link> </button></div>
        </div>
     );
}
 
export default BlogsHeader;