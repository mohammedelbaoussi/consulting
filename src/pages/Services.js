import './Services.css'
import {FaBalanceScale, FaGavel,} from 'react-icons/fa'
import {FaBookBookmark, FaBuilding, FaBuildingUser, FaBusinessTime, FaCarBurst, FaHandcuffs, FaMoneyBillTransfer, FaRocket, FaUsers, FaUsersRectangle} from 'react-icons/fa6'
import { Link, Outlet } from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react'
import  {Navigation,Pagination, Scrollbar, A11y} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import ServJuridiqueNav from '../components/ServJuridiqueNav';

const Services = () => {
    return ( 
        <div className="services">
           <div className="headhead">
                <div className="container">
                    <div className="row">
                        <h2>Nos Services Juridiques</h2>
                    </div>
                </div>
            </div>
            <div className="services">
            <div className="container">
                <div className="row">
                   <ServJuridiqueNav/>
                   <div className="col-9">
                    <div className="ServiceContainer px-5 py-4">
                        <Outlet/> 

                    </div>
                   </div>
                
                </div>
            </div>
        </div>
            
        </div>
     );
}
 
export default Services;