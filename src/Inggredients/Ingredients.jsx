import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'

import backArrow from '../Assets/backArrow.svg'
import starWhite from '../Assets/star-white.svg'
import clock from '../Assets/clock.svg'
import rightImg from '../Assets/herbsImg.png'
import applianceImg from '../Assets/appliance.png'
import ItemList from './ItemList/ItemList';




// Fetcher Function
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Ingredients = () => {
    const navigate = useNavigate();

    const { data } = useSWR("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1", fetcher);


    return (
        <div >

            <div className="absolute  right-[30px] top-[5%] w-[40vw] h-[40vw] max-w-[220px] max-h-[220px] rounded-full bg-[#FFF9F2] "></div>
            <img className="absolute right-[-100px] top-[10vh] w-[70%] h-[50vw] max-w-[350px] max-h-[250px]" src={rightImg} alt="rightImg" />

            {/* Top Navigation */}
            <div className='flex gap-[8px] relative left-[10px] top-[10px]'>
                <img
                    src={backArrow}
                    alt="backArr"
                    className='cursor-pointer relative l-2 top-0'
                    onClick={() => navigate(-1)} />

                <h2 className='nav-text '>Ingredients</h2>
            </div>

            {/* Upper Part*/}
            <div className="max-w-[900px] w-[90%] my-[1rem] mb-[2rem] relative left-[20px] top-[10px]">
                <h1 className='text-[1.5rem] font-bold flex items-center gap-10 my-[0.2rem]'>{data?.name}
                    <div className="flex items-center justify-center h-15 w-32 bg-[#51c452] gap-2 rounded-[4px] w-[55px]">
                        <p className='text-white text-[0.6rem] font-semibold'>4.2</p>
                        <img src={starWhite} alt="star" className='h-[8px] w-[10px]'/>
                    </div>
                </h1>

                {/* Description */}
                <p className='w-[55%] text-[0.55rem] font-medium text-[#A3A3A3] relative left-[10px] top-[10px]'>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>

                {/* Time to Prepare */}
                <div className="gap-[0.5rem] mt-[1.5rem] flex relative left-[10px] top-[10px]">
                    <img src={clock} alt="clock" />
                    <p className='text-[0.7rem] font-semibold'>{data?.timeToPrepare}</p>
                </div>
            </div>


            {/* Divider */}

            <hr className='w-[82%] h-[3px] bg-[#F2F2F2] border-none relative left-[20px] hr-1' />

            {/* Ingredients */}
            <div className="w-[90%] max-w-[900px] relative left-[20px] top-[10px]">
                <div className='flex flex-col pb-4 border-b-2 border-[#F2F2F2]'>
                    <h2 className='subHeading-ingredient'>Ingredients</h2>
                    <p className='text-[0.5rem] text-[#8A8A8A] my-2'>For 2 people</p>
                </div>

                {/* Item List */}
                <ItemList name1="Vegetables" data={data?.ingredients.vegetables}/>
                <ItemList name="Spices" data={data?.ingredients.spices} />
            </div>


            {/* Appliances */}
            <div className="w-[90%] max-w-[900px] my-[0.75rem] relative left-[10px] top-[10px]">
                <h2 className="text-lg font-bold">Appliances</h2>
                <div className="my-4 flex gap-10">
                    {data?.ingredients.appliances.map((item, key)=>{
                        return(
                            <div key={key} className="flex flex-col items-center w-[20%] max-w-[100px] bg-[#F5F5F5] rounded-[8px] py-4 px-2 overflow-wrap">
                                <img src={applianceImg} alt="" className='w-[30px] h-[56px]'/>
                                <p className='text-center text-[0.5rem] font-semibold w-[80%]'>{item.name}</p>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    );
};

export default Ingredients;