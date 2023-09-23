import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteConsultationMutation, useGetConsultationQuery, useUpdateConsultationAnsweredMutation, useUpdateConsultationPaidMutation } from "../../../features/Consultations/ConsultationApiSlice";
import './ConsultationDetails.css'
import {FaUser, FaMailBulk, FaPhone} from 'react-icons/fa'
import { useState } from "react";

const OrderDetails = () => {
    const {id} = useParams()

    const {data} = useGetConsultationQuery(id)
    //const [paid, setPaid] = useState(data?.consultation?.paid)
    //const [answered, setAnswered] = useState(data?.consultation?.answered)
    const [updateConsultationAnswered] = useUpdateConsultationAnsweredMutation()
    const [updateConsultationPaid] = useUpdateConsultationPaidMutation()
    const [deleteConsultation] = useDeleteConsultationMutation()
    const navigate = useNavigate()
    
   const handlePaiddUpdate= async (e)=>{
    e.preventDefault()
    if(!id) return;

    const paid =  !data?.consultation?.paid


    await updateConsultationPaid({id, paid})
   }
   const handleanswereddUpdate= async ()=>{
    
    const answered = !data?.consultation?.answered
    await updateConsultationAnswered({id, answered})
   }

   const handleDelete = async() =>{
    if(window.confirm("Do you want to delete this Consultation?")){

        await deleteConsultation(data?.consultation?._id)
        navigate('/tableaudebord/consultations')
    }
   }

    return ( 
        <div className="orderDetails">
        <div className="container">
            <div className="row">
                    <div className="col-12">
                        <h4 className="head"><Link to={'/tableaudebord/consultations'}><span>Back To Consultation</span>  </Link></h4>
                    </div>
                    <div className="col-md-8 col-12 mb-3">
                        <div className="border p-4">

                            <h4 className="border-bottom">{data?.consultation?.sujet}</h4>
                            <p className="pt-2">{data?.consultation?.message}</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="border p-3">
                        <div className="username"><FaUser/> {data?.consultation?.name}</div>
                        <div className="userEmail mt-2"><FaMailBulk/> {data?.consultation?.email}</div>
                        <div className="userPhone mt-2"><FaPhone/> {data?.consultation?.phone}</div>
                        {
                            data?.consultation?.paid === false?
                           
                            <div className="notpaid"><button className="btn mt-2" style={{color: "#673333", backgroundColor: '#fd7272'}}onClick={handlePaiddUpdate}>Set Paid</button></div>

                          
                            :
                            <div className="paid mt-2"><button className="btn mt-2" style={{color: "#336741", backgroundColor: '#7effa1'}}onClick={handlePaiddUpdate}>already PAID</button></div>

                        }
                        {
                            data?.consultation?.answered ===false?
                            
                            <div className="notpaid"><button onClick={handleanswereddUpdate} className="btn mt-2" style={{color: "#fff", backgroundColor: "#000"}}>Set ANSWERED</button> </div>
                            :
                            <div className="delivered"><button onClick={handleanswereddUpdate} className="btn mt-2" style={{color: "#fff", backgroundColor: "#000"}}>Already ANSWERED</button></div>
                        }
                        <button onClick={()=>handleDelete()} className="btn bg-danger mt-2" style={{color: "#fff"}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OrderDetails;