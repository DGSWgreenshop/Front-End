
import React from 'react'
import Image, { StaticImageData } from 'next/image';


interface eventProps {
    src: StaticImageData;
    title: string;
    description: string;
}

const EventItem = (props: eventProps) => {
  return (
    <div className={`flex content-center mt-8 overflow-x-hidden bg-[#1F2024] rounded-xl mx-5 p-4 pl-8`}>
        <Image src={props.src} alt="EventItem IMG" className="w-[72px] h-[72px] mr-2 rounded-md" />
        <div className="h-20 ">
            <div className="font-bold text-[13px] text-[#ffffff] flex flex-row justify-between ">
                {props.title}
            </div>
            
            <p className="description mt-2 text-[8px] truncate text-[#ffffff] w-[185px]">{props.description}</p>
            <div className="flex w-full mt-3">
                
            </div>
        </div>
    </div>
  )
}

export default EventItem