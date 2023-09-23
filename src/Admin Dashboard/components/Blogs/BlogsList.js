import { useState } from 'react';
import { useGetBlogsQuery } from '../../../features/Blogs/BlogApiSlice';
import { useGetCategoriesQuery } from '../../../features/Categories/CategorySliceApi';
import BlogCard from './BlogCard';


const BlogsList = () => {

    const {data, isLoading}= useGetBlogsQuery()
    const [search, setSearch] = useState('');

    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                        <div className="p-3 border">
                        <div className="row">
                            <div className="col-12"> 
                                <div className="p-3">
                                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                                </div>    
                            </div>
                           
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
        <div className="container">
            <div className="row ">
            {
                        isLoading? 
                        <div className="vh-100 d-flex align-items-center justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                        </div>
                        
                        :
                        <>
                        <div className="col">
                            <div className="p-3 border">
                                <div className="row justify-content-center">
                                    {
                                        data?.Blogs.length === 0?
                                        <h5 className='text-center' style={{color:'#c2c2c2'}} >la liste des blogs est vide</h5>
                                        :
                                   
                                        data?.Blogs?.filter((item) => {
                                            return search.toLowerCase() === ''
                                            ? item
                                            : item?.title?.toLowerCase().includes(search);
                                        })?.map((blog)=>(
                                            <BlogCard blog={blog} key={blog?._id}/>
                                        )) 

                                    }
                                    
                                
                                
                                </div>
                            </div>
                        </div>
                        </>
                        }
            </div>
        </div>        
        </>
     );
}
 
export default BlogsList;