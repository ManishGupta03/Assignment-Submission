// import React from 'react'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());


const PopularDishes = () => {
    const {data, isValidating} = useSWR('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/', fetcher)
    
    console.log(data?.popularDishes[0].name)
    
    return (
        isValidating ? <h4>Loading...</h4> :
        <div className="py-20">

            <h1 className='text-[0.9rem] font-bold mb-10'>Popular Dishes</h1>

            {/* Popular Dish Icon */}
            <div className="flex gap-10">
                {data?.popularDishes.map((item, key) => {
                    return (
                        <div className='w-[54px] h-[54px] rounded-full overflow-hidden relative flex-col' key={key}>
                            <img src={item.image} alt="popular-dish-img" className='w-full h-full object-cover brightness-[0.55]' />
                            <p className='text-center absolute text-[0.6rem] font-semibold text-white'>{item.name}</p> 
                        </div>
                    )
                })}
            </div>
        </div>
        
    );
};

export default PopularDishes;