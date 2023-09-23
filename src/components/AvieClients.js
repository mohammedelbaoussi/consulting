import './Reviews.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import  {Navigation,Pagination, Scrollbar, A11y} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import ReviewCard from './ReviewCard'

const AvieClients = () => {


    return ( 
        <div className="reviews">
            <div className="container">
                <div className="row">
                    <h1>Avis de Nos Clients</h1>
                <Swiper
                    className='mySwiper'
                    spaceBetween={50}
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
                             <ReviewCard/>
                        </SwiperSlide>
                        <SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
                        </SwiperSlide><SwiperSlide className='SwiperSlide'>
                             <ReviewCard/>
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
     );
}
 
export default AvieClients;