'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import ProductionCard from "@/app/components/ProductionCard";

const ProdSlideCard = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                style={{ width: '440px' }} // Swiper의 너비를 이미지와 동일하게 설정
                loop={true}
            >
                <SwiperSlide>
                    <ProductionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductionCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductionCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProdSlideCard;
