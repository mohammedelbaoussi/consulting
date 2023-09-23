import {BsFillEyeFill} from 'react-icons/bs'
import SearchBarOrder from '../../components/Consultaions/SearchBarOrder';
import './Consultations.css'
import { useGetConsultationsQuery } from '../../../features/Consultations/ConsultationApiSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetCategoriesQuery } from '../../../features/Categories/CategorySliceApi';

const Orders = () => {
    const {data, isLoading} = useGetConsultationsQuery()
    const [search, setSearch] = useState('');
    const categoreis = useGetCategoriesQuery().data
    return ( 
        <div className="container ordersContainer">
            <div className="row ">
                <div className="Orders">
                        <div className="row">
                            <h1 style={{fontWeight: 'bold', margin: '20px 0px'}}>Consultaions</h1>
                        </div>
                        <div className="row dashlatestorders">
                            <div className="col-12">
                            <div>
                                {/* <SearchBarOrder/> */}
                                <div className="col-md-6 col-12"> 
                                    <div className="p-md-3 py-3">
                                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                                    </div>    
                                </div>
                                </div>
                                <div className="p-3 border" >
                                {
                                    isLoading? 
                                    <div className="vh-100 d-flex align-items-center justify-content-center">
                                    <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                    </div>
                                    
                                    :
                                    <table className="table table-sm mt-4 " id='no-more-tables'>
                                        <thead>
                                            <tr>
                                                <th scope="col"><span className='testName'>Name</span></th>
                                                <th className='emailTh' scope="col"><span>Email</span></th>
                                                <th scope="col"><span>phone</span></th>
                                                <th scope="col"><span>sujet</span></th>
                                                <th scope="col"><span>Paid</span></th>
                                                <th scope="col"><span>Date</span></th>
                                                <th scope="col"><span>Status</span></th>
                                                <th scope="col" className='action'><span>Action</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data?.filter((item) => {
                                                    return search.toLowerCase() === ''
                                                      ? item
                                                      : item?.name?.toLowerCase().includes(search);
                                                  }).map((consultation)=>(

                                                <tr key={consultation?._id}>
                                                    <td data-title="Name" scope="row" className="orderby">{consultation?.name}</td>
                                                    <td data-title="Email" className="w-25 orderemail">{consultation?.email}</td>
                                                    <td data-title="phone" className="orderprice">{consultation?.phone}</td>
                                                    <td data-title="sujet" className="orderstatus"><span className="suject">{consultation?.sujet}</span> </td>
                                                    {
                                                        consultation?.paid ===false? 
                                                        <td data-title="Paid" className="orderstatus"><span className="notpaid">Not paid</span> </td>
                                                        :
                                                        <td data-title="Paid" className="orderstatus"><span className="paid">paid</span> </td>
                                                    }
                                                    <td data-title="Date" className="orderdate">{consultation?.createdAt}</td>
                                                    {
                                                        consultation?.answered === false? 
                                                        <td data-title="Status" className="orderNotDelivered"> <span>Not Delivered</span></td>
                                                        :
                                                        <td data-title="Status" className="orderDelivered"> <span>Delivered</span></td>
                                                    }
                                                    <td data-title="Action" className="orderdetails">
                                                        <Link to={`/tableaudebord/consultation/${consultation?._id}`}><span><BsFillEyeFill/></span></Link></td>
                                                    </tr>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>
                                    }
                                </div>
                            </div>
                            
                        </div>
         

                </div>
               
            </div>
        </div>
     );
}
 
export default Orders;