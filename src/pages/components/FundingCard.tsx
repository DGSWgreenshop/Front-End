import Eximg from '../../../public/Images/Funding.jpg';
import Image from "next/image";
import Tree from '../../../public/Images/tree.png'
import Bar from '../../../public/Images/bar.png'

const FundingCard = () => {
    const imageUrl = Eximg.src;

    return (
        <div className={`w-[300px] h-[230px] bg-white mt-[20px] rounded-md relative overflow-hidden]`}
             style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className={`absolute bottom-0 left-0 w-full h-[100px] bg-black bg-opacity-50 p-4`}>
                <h1 className="text-white text-[18px] font-bold">갈 곳 없는 폐비닐로 업사이클링...</h1>
                <div className={`flex justify-between items-center`}>
                    <div className={`flex gap-[6px]`}>
                        <Image src={Tree} alt={'tree-img'} width={23} height={23}/>
                        <h2 className={`text-white text-[16px] font-medium`}>기부자 - 14k</h2>
                    </div>
                    <h2 className={`text-white text-[16px] font-bold`}>3,000,000 원</h2>
                </div>
                <Image src={Bar} alt={'bar-img'} />
            </div>
        </div>
    );
};

export default FundingCard;
