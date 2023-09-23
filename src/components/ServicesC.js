import '../pages/Services.css'
import {FaBalanceScale, FaGavel,} from 'react-icons/fa'
import {FaBookBookmark, FaBuilding, FaBuildingUser, FaBusinessTime, FaCarBurst, FaHandcuffs, FaMoneyBillTransfer, FaRocket, FaUsers, FaUsersRectangle} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react'
import  {Navigation,Pagination, Scrollbar, A11y} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

const ServicesC = () => {
    return ( 
        <div className="services">
           
            <div className="reviews">
            <div className="container">
                <div className="row">
                    <div className="">
                    <h1>Nos Services Juridique</h1>
                <Swiper
                    className='mySwiper'
                    spaceBetween={10}
                    slidesPerView={4}
                    slidesPerGroup={2}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                      }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    modules={[Navigation,Pagination, Scrollbar, A11y]}
                    >
                        <SwiperSlide className='SwiperSlide'>
                        <div className='text-center'>
                            <Link to='/droit-civil'>
                            <FaBookBookmark size={50}/><br/>
                            <span>Droit civil</span>
                            </Link>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-des-sociétés'>
                            <FaBuilding size={50}/><br/>
                            <span>Droit des sociétés</span>
                            </Link>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide className='SwiperSlide'>
                         <div className="text-center">
                            <Link to='/droit-du-travail'>
                                <FaUsers size={50}/><br/>
                                <span>Droit du travail</span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-commercial'>
                            <FaMoneyBillTransfer size={50}/><br/>
                            <span>Droit commercial</span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-pénal-des-affaires'>
                            <FaRocket size={50}/><br/>
                            <span>Droit pénal des affaires </span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-immobilier'>
                            <FaBuildingUser size={50}/><br/>
                            <span>Droit Immobilier </span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/Droit-Public-des-affaires-au-Maroc'>
                            <FaUsersRectangle size={50}/><br/>
                            <span>Droit Public des affaires au Maroc </span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-de-la-concurrence'>
                            <FaBusinessTime size={50}/><br/>
                            <span>DROIT DE LA CONCURRENCE </span>
                            </Link>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-des-assurances'>
                            <FaCarBurst size={50}/><br/>
                            <span>Droit des assurances </span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                        <div className="text-center">
                            <Link to='/droit-fiscal'>
                            <FaHandcuffs size={50}/><br/>
                            <span>droit fiscal </span>
                            </Link>
                            </div>
                        </SwiperSlide>
                        <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow"  style={{color: '#063251'}}>
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow" style={{color: '#063251'}}>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default ServicesC;