import { useGetAllUsersQuery } from '../../../features/Auth/AuthApiSlice'
import { useGetConsultationsQuery } from '../../../features/Consultations/ConsultationApiSlice'
import { useGetBlogsQuery } from '../../../features/Blogs/BlogApiSlice'
import {FaUser, FaBlog, FaQuestionCircle, FaLowVision, FaRegHandPointer} from 'react-icons/fa'
import { useGetAllReviewsQuery } from '../../../features/Reviews/ReviewsSliceApi'


const DashTotal = () => {

   const users = useGetAllUsersQuery().data
   const Consultaions  = useGetConsultationsQuery().data
   const blogs = useGetBlogsQuery().data
   const reviews = useGetAllReviewsQuery().data
    return ( 
        <div className="container">
            <div className="row dashtotal justify-content-center">
              
                
                <div className="col-md-6 col-12 cardTotal mb-4">
                    <div className="p-3 border d-flex">
                    <div className="iconcontainer TUsers"><span><FaUser/></span></div>
                    <div iconContainer>
                        <span className="d-block fw-bold">utilisateurs</span> 
                    <span>{users?.length}</span> 

                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 cardTotal mb-4">
                    <div className="p-3 border d-flex">
                    <div className="iconcontainer TBlogs">
                      <span><FaBlog/></span>
                    </div>
                    <div>
                        <span className="d-block fw-bold">Total blogs</span> 
                        <span>{blogs?.length}</span> 
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 cardTotal mb-4">
                    <div className="p-3 border d-flex">
                    <div className="iconcontainer TConsultations">
                      <span><FaQuestionCircle/></span>
                    </div>
                    <div>
                        <span className="d-block fw-bold">Total Consultation</span> 
                        <span>{Consultaions?.length}</span> 
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 cardTotal mb-4">
                    <div className="p-3 border d-flex">
                        <div className="iconcontainer TVisitor"><span ><FaRegHandPointer/></span> </div>
                        <div >
                            <span className="d-block fw-bold">reviews</span> 
                            <span>{reviews?.length}</span> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default DashTotal;