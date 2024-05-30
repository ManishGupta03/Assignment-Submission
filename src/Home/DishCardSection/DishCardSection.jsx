import useSWR from 'swr';
import { Link } from 'react-router-dom';

import vegLogo from '../../Assets/veg.svg'
import starWhite from '../../Assets/star-white.svg'
import refrigerator from '../../Assets/Refrigerator.svg'
import triangleArrow from '../../Assets/keyboard_arrow_right.svg'




const fetcher = (...args) => {
    fetch(...args).then(res => res.json());
}


const DishCard = () => {
    const { data,isLoading } = useSWR('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/', fetcher);

    return (
        isLoading ? <h2>Loading...</h2> : 
        <>
            {data?.dishes.map((item) => {
                return (
                    <>
                    <div className='w-full py-[1vh] flex justify-between'>
                        <div className="flex flex-col justify-start content-start w-4/5 gap-10">
                            
                            {/* Name & Rating */}
                            <div className="w-full flex items-center gap-12">
                                <h2 className='text-[0.85rem]'>{item.name}</h2>
                                <img src={vegLogo} alt="veg" className = "h-[10px] w-[10px]"/>

                                <div className="flex items-center justify-center h-15 w-[52px] bg-[#51c452] gap-2 rounded-[4px]">
                                    <p className='text-white text-[0.6rem]'>{item.rating}</p>
                                    <img src={starWhite} alt="star" className='h-[8px] w-[8px]'/>
                                </div>
                            </div>


                            {/* Equipment & Ingredients */}
                            <div className="flex items-center gap-16">

                                {/* Equipments */}
                                <div className="flex items-center gap-12">
                                    {item.equipments.map((equipment,key)=>{
                                        return(
                                            <div className='flex-col' key={key}>
                                                <img src={refrigerator} alt={equipment}/>
                                                <p className='text-[0.4rem] mt-2 text-[#8a8a8a]'>{equipment}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Divider */}
                                <hr className='border-none h-full w-[0.8px] bg-[#D6D6D6CE]'/>

                                {/* Ingredients */}
                                <div className="flex flex-col">
                                    <h4 className='text-[0.55rem] font-bold'>Ingredients</h4>
                                    <Link to={`/ingredients/${item.id}`} className='flex justify-center items-center text-[#FF8800] text-[0.5rem] font-semibold'>View List <img src={triangleArrow} alt="arrow" className='w-5'/></Link>
                                </div>
                            </div>


                            {/* Description */}
                            <div className="w-full break-all">
                                <p className='text-[#707070] text-[0.6rem] tracking-[0.01rem]'>{item.description}</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center">
                            {/* Dish Image */}
                            <div className="h-66 w-92 overflow-hidden rounded-8">
                                <img src={item.image} alt="dish-img" className='w-[120px] h-[75px] object-cover rounded-lg'/>
                            </div>
                            <button className='relative bottom-[9px] bg-white rounded-[3px] text-[#FF8800] font-semibold text-[0.7rem] border border-[0.5px] border-[#FF9A26] shadow-md cursor-pointer w-[60px]'>
                                Add  +
                            </button>
                        </div>

                    </div>
                    <hr className='border-none w-full h-[0.5px] bg-[#D6D6D6CE]'/>
                    </>
                )
            })}

        </>
        

    )


}



const DishCardSection = () => {
    return (
        <div className='w-full flex flex-col gap-10 overflow-x-hidden'>
            <DishCard />
            
            
        </div>
    );
};

export default DishCardSection;