'use client'

import React, { useState } from "react";
import Image from "next/image";
import CapImg from "../../../public/Images/cap1.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductionCard = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="w-[140px] h-[200px] bg-white rounded-xl">
            <div className="w-full h-[121px] bg-[#464646] rounded-t-xl flex justify-center items-center relative">
                <div className="w-[52px] py-[2px] bg-[#C24340] flex justify-center items-center rounded-full absolute top-[10px] left-[15px]">
                    <h3 className="text-sm text-white font-light">-20%</h3>
                </div>
                <div
                    className="absolute w-[35px] h-[35px] rounded-full flex justify-center items-center bg-[#1F2024] top-[70px] right-[10px] cursor-pointer"
                    onClick={handleLikeClick}
                >
                    {isLiked ? <FaHeart className="text-red-500" size={20} /> : <FaRegHeart className="text-white" size={20} />}
                </div>
                <Image src={CapImg} alt="prod-img" width={100} height={100} />
            </div>
            <div className="w-full h-[81px] rounded-b-xl bg-[#1F2024] p-[15px]">
                <h2 className="text-white text-[14px]">playpla-ballcap</h2>
                <h2 className="text-[#FF3C26] font-bold mt-[10px]">20,300₩</h2>
            </div>
        </div>
    );
};

export default ProductionCard;
