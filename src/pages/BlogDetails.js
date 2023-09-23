import {FaFacebook, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {BsFillShareFill} from 'react-icons/bs'
import './BlogDetails.css'
import { useParams } from 'react-router-dom'
import { useGetBlogQuery } from '../features/Blogs/BlogApiSlice'
import AddReview from '../components/AddReview'
import { useGetReviewsQuery } from '../features/Reviews/ReviewsSliceApi'
import {FaUser} from 'react-icons/fa'
import dateFormat from 'dateformat';

const BlogDetails = () => {

    const {id} = useParams()

    const {data, isLoading} = useGetBlogQuery(id)
    // const category = useGetCategoryQuery(data?.blog?.categoryId)?.data?.category
    const comments = useGetReviewsQuery(id)?.data?.reviews


    return ( 
            <div className="blogDetails">
                <div className="headhead">
                    <div className="container">
                        <div className="row">
                            <h2 style={{color: "#ffff"}}>{data?.blog?.title}</h2>
                        </div>
                </div>
            </div>
            <div className="container my-5">
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
                        <div className="blog">
                            <div className="blogImg">
                                <img src={data?.blog?.thumbnail} alt="" />
                            </div>
                            <div className="createdAt border-bottom pt-4 pb-2 mb-5">
                            <span>Créé le: {dateFormat(data?.blog?.createdAt, "mmmm dS, yyyy") } </span>
                            </div>
                            
                        <div dangerouslySetInnerHTML={{
                            __html: data?.blog?.description
                        }} />
                        </div>
                        <div className="share">
                            <span><BsFillShareFill/></span>
                            <span className='Partager'>Partager: </span>
                            <span className='Sicon'><FaFacebook/></span>
                            <span className='Sicon'><FaTwitter/></span>
                            <span className='Sicon'><FaLinkedinIn/></span>
                        </div>
                        </>
                }
                    
                    <div className="comments">
                        <h4>
                            Commentaires:
                        </h4>
                        {
                            comments?.map((comment)=>(

                            <div className="comment mb-3 col-md-6">
                                <div className="userImg border p-1 me-2" style={{height: '4rem'}}><FaUser  style={{fontSize: "3rem"}}/></div>
                                <div className="">
                                    <span style={{fontWeight:'500'}}>{comment?.user?.firstName} {comment?.user?.lastName}</span>
                                    <p>{comment?.content}</p>
                                </div>
                            </div>
                            ))
                        }


                        <AddReview/>
                    </div>


                </div>
            </div>
        </div>
     );
}
 
export default BlogDetails;