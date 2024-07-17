'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import FundingCard from './FundingCard';

const FundingSlideCard = () => {
    return (
        <div className={`mb-[110px]`}>
            <Swiper
                slidesPerView={3} // Swiper의 너비를 이미지와 동일하게 설정
                style={{ width: '925px' }}
                loop={true}
            >
                <SwiperSlide>
                    <FundingCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FundingCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FundingCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FundingCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FundingCard />
                </SwiperSlide>
                <SwiperSlide>
                    <FundingCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default FundingSlideCard;
