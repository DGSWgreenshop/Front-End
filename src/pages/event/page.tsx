import React from 'react';
import dgsw from '../../../public/Images/dgsw.png';
import bssm from '../../../public/Images/bssm.png';
import EventItem from '../components/EventItem';

const Event = () => {
    return (
        <div className='mb-[600px]'>
            <h1 className={`text-center mt-[56px] mb-[36px] text-3xl text-white font-semibold`}>대여중인 행사</h1>
            <EventItem 
                src={dgsw} 
                title={'대구소프트웨어마이스터고등학교'}  
                description={'대구소프트웨어마이스터고등학교의 8번째 축제입니다..!'}>
            </EventItem>

            <EventItem 
                src={bssm} 
                title={'부산소프트웨어마이스터고등학교'}  
                description={'대구소프트웨어마이스터고등학교의 8번째 축제입니다..!'}>
            </EventItem>
        </div>
    );
};

export default Event;