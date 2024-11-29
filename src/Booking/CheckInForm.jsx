import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faSearchLocation, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CheckInForm = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [creds, setcreds] = useState({
    guests: '',
  });

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setcreds({ ...creds, start: date });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setcreds({ ...creds, end: date });
  };

  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      start: startDate,
      end: endDate,
      guests: creds.guests,
    };

    localStorage.setItem('checkInFormData', JSON.stringify(formData));

    console.log('Form data saved to localStorage:', formData);
    navigate('/selectroom');
  };

  return (
    <div className="flex justify-center items-center m-2">
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col justify-center items-center md:shadow-sm shadow-xl md:shadow-[#121313] shadow-cyan-800 rounded-3xl bg-[#121313] xl:max-w-7xl md:max-w-5xl w-full p-6 gap-4"
      >
        {/* Start Date Picker */}
        <div className="relative w-full cursor-pointer">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            minDate={new Date()}
            className="bg-transparent border outline-none text-white text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholderText="Select start date"
          />
        </div>

        {/* End Date Picker */}
        <div className="relative w-full cursor-pointer">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            minDate={startDate}
            className="bg-transparent border outline-none text-white text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholderText="Select end date"
          />
        </div>

        {/* Dropdown */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <select
            onChange={onChange}
            name="guests"
            id="guests"
            className="bg-transparent border outline-none text-white text-sm rounded-lg focus:bg-[#121313] block w-full pl-10 p-2.5"
          >
            <option value="">Guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Button */}
        <button className="btn rounded-lg p-2 font-semibold w-full" type="submit">
          Check Availability
          <FontAwesomeIcon className="ml-2" icon={faSearchLocation} />
        </button>
      </form>
    </div>
  );
};

export default CheckInForm;
