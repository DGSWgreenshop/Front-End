import React from 'react';
import Proflie from '../../../public/Images/proflie.png';
import Image from 'next/image';
import bg1 from '../../../public/Images/bg1.png';
import Item from '../components/Item';

const Page = () => {
    // 장바구니 항목들
    const items = [
        { src: bg1, price: 300, title: '다회용 그릇', mount: 1, description: '50만명이 사용한 트래쉬 버스터즈와 함께한 다회용 그릇입니다!', tags: ["dff", "asfd"] },
        { src: bg1, price: 300, title: '다회용 그릇', mount: 3, description: 'rkafsljkljaelkfjdsasdffsasdf', tags: ["dff", "asfd"] }
    ];

    // 총 가격 계산
    const totalPrice = items.reduce((total, item) => total + item.price * item.mount, 0);

    return (
        <div className=''>
            <h1 className={`text-center mt-[56px] mb-[36px] text-3xl text-white font-semibold`}>내 정보</h1>
            <Image src={Proflie} alt="Item IMG" className="" />
            <h1 className={`text-start mt-[38px] mb-[20px] ml-[37px] text-[22px] text-white font-semibold`}>장바구니</h1>
            <div className='flex w-full justify-center items-center'>
                <div className='w-[300px] h-[400px] bg-[#212121] rounded-md px-4 mb-48 flex flex-col justify-between'>
                    <div>
                        {items.map((item, index) => (
                            <Item 
                                key={index}
                                src={item.src}
                                price={item.price}
                                title={item.title}
                                mount={item.mount}
                                description={item.description}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                    <div className="flex justify-end items-center mb-5">
                        <div className="text-[20px] text-[#ffffff]">총 가격</div>
                        <div className="font-bold text-[23px] text-[#FF3C26] ml-2">{totalPrice}원</div>
                    </div>

                </div>

                
            </div>
        </div>
    );
};

export default Page;
