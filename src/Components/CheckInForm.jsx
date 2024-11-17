import { faCalendar, faSearch, faSearchLocation, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckInForm = () => {
  // State to handle start and end date values
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Function to handle changes in the start date input
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  // Function to handle changes in the end date input
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className='flex justify-center items-center m-2 '>
      <div className="flex md:flex-row flex-col justify-center items-center md:shadow-sm shadow-xl md:shadow-[#121313] shadow-cyan-800 rounded-3xl bg-[#121313] xl:max-w-7xl md:max-w-5xl w-full p-6 gap-4">
        
        {/* Start Date Picker */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* Calendar Icon */}
            <FontAwesomeIcon  icon={faCalendar}/>
          </div>
          <input
            id="datepicker-range-start"
            name="start"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="bg-transparent border outline-none text-white text-sm rounded-lg block w-full pl-10 p-2.5 "
            placeholder="Select start date"
          />
        </div>


        {/* End Date Picker */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon  icon={faCalendar}/>
          </div>
          <input
            id="datepicker-range-end"
            name="end"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="bg-transparent border outline-none text-white text-sm rounded-lg block w-full pl-10 p-2.5 "
            placeholder="Select end date"
          />
        </div>


        {/* Dropdown */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon  icon={faUserGroup}/>
          </div>
          <select
            name="guests"
            id="guests"
            className="bg-transparent border outline-none text-white text-sm rounded-lg focus:bg-[#121313] block w-full pl-10 p-2.5"
          >
            <option value="persons" selected>Guests</option>
            <option value="couple">2</option>
            <option value="family">3 to 4</option>
            <option value="grand-family">4 to 8</option>
          </select>
        </div>

        {/* Button */}
        <button className="btn rounded-lg p-2 font-semibold w-full">
          <Link to={"/selectroom"}>
          Check Availability
          <FontAwesomeIcon className='ml-2' icon={faSearchLocation}/>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CheckInForm;
