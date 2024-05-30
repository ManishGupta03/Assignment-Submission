import {useState} from "react";
import DatePicker from 'react-datepicker';
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-datepicker/dist/react-datepicker.css';

import backArrow from "../Assets/backArrow.svg";
import datePickerImg from "../Assets/Select_date.svg";
import timePickerImg from "../Assets/Set_time.svg";
import PopularDishes from "./PopularDishes/PopularDishes";
import DishCardSection from "./DishCardSection/DishCardSection";
import burgerDrinkWhite from '../Assets/burgerDrinkWhite.svg'
import triangleDown from '../Assets/downTriangle.svg'
import arrowrightalt from '../Assets/arrow_right_alt.svg'


const tagsData = [
  { tag: "Italian", selected: true },
  { tag: "Indian", selected: false },
  { tag: "Chinese", selected: false },
  { tag: "Mexican", selected: false },
  { tag: "Vegan", selected: false }
]



const Home = () => {

  const [startDate, setStartDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [tags, setTags] = useState(tagsData);

  const handleDateChange = (date) => {
    setStartDate(date);
    setIsDatePickerOpen(false); // Close the date picker after selecting a date
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [startTime, setStartTime] = useState('22:30'); // 10:30 PM
  const [endTime, setEndTime] = useState('00:30'); // 12:30 AM

  const toggleTimePicker = () => {
    setIsTimePickerOpen(!isTimePickerOpen);
  };

  const tagClick = (index)=>{
    const updatedTags = [...tags];
    updatedTags[index].selected = !updatedTags[index].selected;
    setTags(updatedTags);
  }

  const handleTimeChange = (value) => {
    // Update the time range (you can customize this as needed)
    const newStartTime = value[0];
    const newEndTime = value[1];
    setStartTime(newStartTime);
    setEndTime(newEndTime);
  };

  return (
    // Main-Div
    <div className = "relative overflow-x-hidden h-screen flex flex-col items-center">

      {/* Navigation-Section */}
      <div className = "w-full px-[4vw] py-[15px] flex bg-white">
      <img src={backArrow} alt="backArr" className='cursor-pointer' />
      <h2 className='text-base font-semibold mx-5'>Select Dishes</h2>
      </div>

      {/* Hero-Section */}
      <div className="flex flex-col items-center border-b-3 border-gray-200 max-w-4xl w-11/12">

             {/* Dark-Section */}
             <div className="absolute top-0 w-full h-[14%] bg-[#1C1C1C] -z-10"></div>


                {/* Hero-container */}
             <div className="max-w-[900px] w-full relative">

              {/* Date and Time Section */}
                  <div className="w-full relative">
                        <div className="my-[2.5vh] w-full justify-between shadow-[0px_1px_4px_rgba(214,214,214,0.62)] py-[3vh] px-[5vw] rounded-[10px] bg-white">
                          <div className="class " onClick={toggleDatePicker}>
                            <img src={datePickerImg} alt="date-picker-png" className="cursor-pointer"/>
                            <p className = "text-xs font-bold ml-8 relative -mt-[16px]">{startDate ? startDate.toDateString() : "30 May 2024"}</p>
                          </div>
                          {isDatePickerOpen && (
          <div className="absolute top-[50px] z-20">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
            />
          </div>
        )}
         {/* Divider */}
         <hr className='relative date-time-divider ml-80  -mt-[22px] div-1'></hr>

         {/* Time Picker */}
         <div className="time-picker flex-row relative ml-80 -mt-[16px] time-1" onClick={toggleTimePicker}>
                                <img src={timePickerImg} alt="time-picker-png" className="cursor-pointer" />
                                <p className = "text-xs font-bold ml-2.5"> {startTime && endTime ? `${formatTime(startTime)} - ${formatTime(endTime)}` : "10:30 PM-12:30 PM"}</p>
                            </div>
                            {isTimePickerOpen && (
          <div className="absolute top-[50px] z-20">
            <TimePicker
              onChange={handleTimeChange}
              value={[startTime, endTime]}
              disableClock={true}
              format="h:mm a"
              hourPlaceholder="hh"
              minutePlaceholder="mm"
              rangeDivider=" - "
            />
          </div>
        )}
                        </div>
                        
                        
                  </div>
                   {/* Tags */}
                   <div className="p-[2px_0] flex gap-[10px] overflow-x-hidden">
                        {tags.map((item, key) => {
                            return (
                                <button className={`${item.selected ? 'bg-[#FFF9F2] px-5 py-0.5 border border-[0.5px] border-[#FF941A] rounded-[18px] text-[#FF941A] text-[0.75rem] font-bold cursor-pointer' : 'bg-transparent px-5 py-0.5 border border-[0.5px] border-gray-300 rounded-[18px] text-[#8A8A8A] text-[0.75rem] cursor-pointer'}`} key={key} onClick={() => tagClick(key)}>
                                    <p>{item.tag}</p>
                                </button>
                            )
                        })}
                    </div>
                    {/* Popular Dishes */}
                    <PopularDishes/>
             </div>
      </div>
       {/* Lower Part Scroll*/}
       <div className="max-w-[900px] w-[90%]">
                <div className="my-4 w-full flex justify-between max-w-[900px] ">
                    <h1 className='gap-5 text-lg tracking-[0.16px] font-bold '>Recommended <img src={triangleDown} alt="drop-down" /></h1>
                    <button className="text-[0.55rem] font-bold h-full px-4 bg-[#1C1C1C] text-white shadow-md rounded-[6px] cursor-pointer div-5">Menu</button>
                </div>
                <div className='w-full flex justify-between'>
                    <DishCardSection/>
                </div>
            </div>

            {/* Fixed Added Items Popup */}
            <div className="z-2 fixed bottom-[20px]  flex justify-between items-center px-3 py-2 bg-[#1C1C1C] rounded-[8px] gap-[40px] cursor-pointer">
                <div className='flex gap-10'>
                    <img src={burgerDrinkWhite} alt="burgerDrink" />
                    <h3 className="text-white text-[0.75rem] font-semibold">3 food items selected</h3>
                </div>
                <img src={arrowrightalt} alt="arrowright" />
            </div>

    </div>

  )
}
const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  let hoursNumber = parseInt(hours, 10);
  const period = hoursNumber >= 12 ? 'PM' : 'AM';

  if (hoursNumber > 12) {
    hoursNumber -= 12;
  } else if (hoursNumber === 0) {
    hoursNumber = 12;
  }

  return `${hoursNumber}:${minutes} ${period}`;
};

export default Home