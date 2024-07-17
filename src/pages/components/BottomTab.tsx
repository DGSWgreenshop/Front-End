'use client'

import { useState } from 'react';
import CircleTab from "@/app/components/CircleTab";

const BottomTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={`fixed bottom-[4px] mt-[30px] flex justify-center items-center mb-[20px] z-50`}>
            <div className={`w-[90vw] h-[65px] bg-[#D8D8D8] rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40`}>
                <div className={`flex w-full h-full justify-center gap-[13px] items-center`}>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <CircleTab
                            key={index}
                            isActive={activeTab === index}
                            onClick={() => setActiveTab(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BottomTab;
