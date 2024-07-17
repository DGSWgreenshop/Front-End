import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import FundingCard from "@/app/components/FundingCard";

const FundingSee = () => {
    return (
        <div className={`pl-[20px] pr-[20px]`}>
            <div className={`flex items-center mt-[20px]`}>
                <Link href={'/home'}>
                    <IoIosArrowBack className={`text-white text-start`} size={32}/>
                </Link>
                <div className={`flex w-full justify-center items-center mr-[30px]`}>
                    <h1 className={`text-white font-medium text-[24px]`}>펀딩</h1>
                </div>
            </div>
            <div className={`grid justify-center items-center`}>
                <div>
                    <FundingCard/>
                </div>
                <div>
                    <FundingCard/>
                </div>
                <div>
                    <FundingCard/>
                </div>
                <div className={`mb-[110px]`}>
                    <FundingCard/>
                </div>
            </div>
        </div>
    )
}

export default FundingSee;
