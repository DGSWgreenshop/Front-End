import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ProductionCard from "@/app/components/ProductionCard";

const ProdSee = () => {
    return (
        <div className="max-w-6xl mx-auto pl-[20px] pr-[20px]">
            <div className={`flex items-center mt-[20px]`}>
                <Link href={'/home'}>
                    <IoIosArrowBack className={`text-white text-start`} size={32} />
                </Link>
                <div className={`flex w-full justify-center items-center mr-[30px]`}>
                    <h1 className={`text-white font-medium text-[22px]`}>친환경 상품 구매</h1>
                </div>
            </div>
            <div className={`flex justify-center items-center mb-[110px]`}>
                <div className={`mt-[25px] w-[285px] grid grid-cols-2 gap-[10px] justify-items-center`}>
                    <ProductionCard/>
                    <ProductionCard/>
                    <ProductionCard/>
                    <ProductionCard/>
                    <ProductionCard/>
                    <ProductionCard/>
                    <ProductionCard/>
                    <ProductionCard/>
                </div>
            </div>
        </div>
    )
}

export default ProdSee;
