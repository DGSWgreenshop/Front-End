import { IoMdHome } from "react-icons/io";
import {FC} from "react";

interface CircleTabProps {
    isActive: any,
    onClick: any,
}

const CircleTab: FC<CircleTabProps> = ({ isActive, onClick }) => {
    return (
        <div
            className={`w-[55px] h-[55px] ${isActive ? 'bg-white' : 'bg-gray-700 rounded-full bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40'} rounded-full justify-center flex items-center cursor-pointer`}
            onClick={onClick}
        >
            <IoMdHome size={30} color={isActive ? 'black' : 'white'}/>
        </div>
    )
}

export default CircleTab;
