import {FC} from "react";
import SlideCard from "@/app/components/SlideCard";
import BottomTab from "@/app/components/BottomTab";
import ProductionCard from "@/app/components/ProductionCard";
import ProdSlideCard from "@/app/components/ProdSlideCard";
import FundingCard from "@/app/components/FundingCard";
import FundingSlideCard from "@/app/components/FundingSlideCard";
import Image from "next/image";
import Link from "next/link";
import G from '../../../public/Images/G@1x.png'

const Home = () => {
    return (
        <div>
            <Link href={'/'} className={`justify-start flex ml-[40px] mt-[20px]`}>
                <Image src={G} alt={'logo'} width={30} height={30} />
            </Link>
            <div className={`flex flex-col pl-[40px] pr-[40px]`}>
                <h1 className={`text-start mt-[20px] text-3xl text-white font-semibold`}>추천 상품</h1>
            </div>
            <SlideCard/>
            <div className={`flex flex-col pl-[40px] pr-[40px]`}>
                <div className={`flex justify-between`}>
                    <h1 className={`text-start mt-[20px] text-3xl text-white font-semibold`}>인기 상품</h1>
                    <h2 className={`text-end mt-[20px] text-md text-white font-semibold self-end`}>더보기</h2>
                </div>
                <div className={`flex justify-center items-center mt-[20px]`}>
                <ProdSlideCard />
                </div>
            </div>
            <div className={`flex flex-col pl-[40px] pr-[40px]`}>
                <div className={`flex justify-between`}>
                    <h1 className={`text-start mt-[40px] text-3xl text-white font-semibold`}>진행중인 펀딩</h1>
                    <h2 className={`text-end mt-[40px] text-md text-white font-semibold self-end`}>더보기</h2>
                </div>
                <div className={`flex justify-center items-center`}>
                   <FundingSlideCard />
                </div>
            </div>
            <BottomTab/>
        </div>
    )
}

export default Home;
