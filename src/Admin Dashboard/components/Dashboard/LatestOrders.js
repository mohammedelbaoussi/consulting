import {BsFillEyeFill} from 'react-icons/bs'
import { useGetConsultationsQuery } from '../../../features/Consultations/ConsultationApiSlice';
import { Link } from 'react-router-dom';


const LatestOrders = () => {
    const {data, isLoading} = useGetConsultationsQuery()
    return ( 
        <div className="container mb-5">
            <div className="row dashlatestorders">
            {
                        isLoading? 
                        <div className="vh-100 d-flex align-items-center justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                        </div>
                        
                        :
                        <>
                        <div className="col-12">
                            <div className="p-3 border">
                                <div className="fs-4 fw-bold">Dernières Consultations</div>
                                <table className="table mt-4" id='no-more-tables'>
                                    <tbody>
                                        {
                                            data?.slice(0,5).map((consultation)=>(

                                                <tr key={consultation?._id}>
                                                <td data-title="Name" scope="row" className="orderby">{consultation?.name}</td>
                                                <td data-title="email" className="orderemail">{consultation?.email}</td>
                                                <td data-title="phone" className="orderprice">{consultation?.phone}</td>
                                                <td data-title="sujet" className="orderstatus"><span className="suject">{consultation?.sujet}</span> </td>
                                                <td data-title="Date" className="orderdate">01/10/2022</td>
                                                <td data-title="Action" className="orderdetails"><Link to={`/tableaudebord/consultation/${consultation?._id}`}><span><BsFillEyeFill/></span></Link></td>
                                                </tr>
                                            ))
                                        }
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </>}
                
            </div>
        </div>
     );
}
 
export default LatestOrders;