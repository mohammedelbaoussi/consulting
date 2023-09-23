import { Link } from 'react-router-dom';
import {useGetBlogsQuery, useGetHomeBlogsQuery } from '../features/Blogs/BlogApiSlice';
import dateFormat from 'dateformat';
import './Blogs.css'

const Blogs = () => {

    const {data, isLoading}= useGetBlogsQuery()


    return ( 
        <div className="blogs">
             <div className="headhead">
                <div className="container">
                    <div className="row">
                        <h2>Nos Blogs</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                
                {
                        isLoading? 
                        <div className="vh-100 d-flex align-items-center justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                        </div>
                        
                        :
                        <>
                            {
                                data?.Blogs?.map((blog)=>(

                                    
                                            <div className="col-md-6 col-lg-4 col-12">
                                                <div className="border mb-4">
                                                <div className="ImgC">

                                                    <img src={blog?.thumbnail} alt="" />
                                                    </div> 

                                                    <div className="ps-2">
                                                    <div className="createdAt">
                                                        <span>Créé le: {dateFormat(blog?.createdAt, "mmmm dS, yyyy") }</span>
                                                    </div>
                                                    <h3>{blog?.title}</h3>
                                            
                                                    <div className="BlogsContent" dangerouslySetInnerHTML={{
                                                        __html: blog?.description
                                                    }} />
                                                
                                                    <div className="readMore">
                                                    <Link to={`/blogs/${blog?._id}`}>EN SAVOIR PLUS</Link>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                ))
                            }
                        </>
                }

                </div>
            </div>
        </div>
     );
}
 
export default Blogs;