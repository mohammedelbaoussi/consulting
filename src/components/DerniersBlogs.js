import { useGetBlogsQuery } from '../features/Blogs/BlogApiSlice';
import './DerniersBlogs.css'

const DerniersBlogs = () => {

    const {data}= useGetBlogsQuery()
    return ( 
        <>
        {
            data?.Blogs?.lenght > 0 ?
            
            ''
            
            :
            <div className="derniersblogs ">
                <div className="text-center mt-5" style={{height:'5.5rem'}}>
                           <h1 className="fw-bold">DERNIERS BLOGS</h1> 
                        </div>
    
                 <div style={{backgroundColor: '#EFEFEF'}}>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 imgContainer p-0">
                            <img src={data?.Blogs[0]?.thumbnail}/>
                        </div>
                        <div className="col-md-6 col-12 text-center dBlog border pt-3 pb-4">
                            <h4 className='py-3 fw-bold'>{data?.Blogs[0]?.title}</h4>
                            <p>
                            <p>
                            <div style={{height: '10rem'}} dangerouslySetInnerHTML={{
                                __html: data?.Blogs[0]?.description
                            }} />
                            </p>
                            </p>
                            <a href={`/blogs/${data?.Blogs[0]?._id}`}>EN SAVOIR PLUS</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 text-center border pt-3 pb-4">
                        <h4 className='py-3 fw-bold'>{data?.Blogs[1]?.title}</h4>
                            <p>
                            <div style={{height: '10rem'}} dangerouslySetInnerHTML={{
                                __html: data?.Blogs[1]?.description
                            }} />
                            </p>
                            <a href={data?.Blogs[1]?._id}>EN SAVOIR PLUS</a>
                        </div>
                        <div className="col-md-6 col-12 imgContainer p-0">
                        <img src={data?.Blogs[1]?.thumbnail}/>
                        </div>
                    </div>
                </div>
                 </div>
                 
            </div>
        }
        </>
       
     );
}
 
export default DerniersBlogs;