
import React from 'react'
import Image, { StaticImageData } from 'next/image';


interface ItemProps {
    src: StaticImageData;
    title: string;
    price: number;
    description: string;
    tags: string[]
    mount: number;
}

const Item = (props: ItemProps) => {
  return (
    <div className={`flex content-center mt-8 overflow-x-hidden`}>
        <Image src={props.src} alt="Item IMG" className="w-[72px] h-[72px] mr-2 rounded-md" />
        <div className="h-20 ">
            <div className="font-bold text-[13px] text-[#ffffff] flex flex-row justify-between ">
                {props.title}
                <p className='font-bold text-[20px] text-[#FF3C26] '>{props.price * props.mount}원</p>
            </div>
            
            <p className="description  text-[8px] truncate text-[#ffffff] w-[185px]">{props.description}</p>
            <div className="flex w-full mt-3">
                {props.tags.map((tag) => (
                    <div className='border-[2px] border-[#FF7B0A] text-[#FF7B0A] flex-row mr-2 px-1 rounded-[3px] text-[10px] content-center'>
                        {tag} 
                    </div>
                ))}
                <div className="text-[#ffffff] flex justify-end w-full fontWeight-[thin]">X{props.mount}</div>
                
            </div>
        </div>
    </div>
  )
}

export default Item