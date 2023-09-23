import BlogsHeader from '../../components/Blogs/BlogsHeader';
import BlogsList from '../../components/Blogs/BlogsList';
import SearchBar from '../../components/Blogs/SearchBar';
import './Blogs.css'

const BlogsTest = () => {
    return ( 
        <div className="container dashproducts">
            <div className="row">
                <BlogsHeader/>
                {/* <SearchBar/> */}
                <BlogsList/>
            </div>
            

        </div>
     );
}
 
export default BlogsTest;