import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rooms } from "../Components/roomsData";
import { Link } from "react-router-dom";

const SelectRoom = () => {

  return (
    <div className="m-5">
      <h1 className="text-4xl font-bold text-white py-5 font-[Unbounded]">Choose Your Room</h1>

      {rooms.map((room) => (
        <div key={room.id} className="mb-5 bg-[#313135] text-white rounded-lg p-5 shadow-2xl">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {/* Box 1: Room Image */}
            <div>
              <img src={room.img} alt={room.title} className="h-full w-full rounded-lg object-cover" />
            </div>

            {/* Box 2: Room Details */}
            <div>
              <h1 className="font-extrabold text-3xl">{room.title}</h1>
              <p>{room.description}</p>

              <div className="py-5 space-y-2">
                {room.facilities.map((facility, index) => (
                  <div className="flex items-center space-x-4" key={index}>
                    <FontAwesomeIcon icon={facility.icon} className="text-cyan-500" />
                    <span>{facility.name}</span>
                  </div>
                ))}
              </div>
              
              {/* ratings */}
              <div className="flex space-x-2">
                {room.ratingstars.map((icon, index) => (
                  <FontAwesomeIcon key={index} icon={icon} className="text-[#CDB9FF]" />
                ))}
                <span className="ml-2 text-[#CDB9FF]">Ratings</span>
              </div>

              <p> {room.persons} </p>
            </div>

            {/* Box 3: Room Price and Booking */}
            <div className="md:text-right space-y-4">
              <h2 className="font-bold">Room Price</h2>
              <h1 className="text-3xl font-extrabold">
                {room.price} <span>USD</span>
              </h1>
              {/* user */}
              <div>
                {room.userIcons.map((icon, index) => (
                  <FontAwesomeIcon key={index} icon={icon} className="mx-1" />
                ))}
              </div>

              <p>{room.persons}</p>
              <p className="text-[#CDB9FF]">Night Stay</p>
              <Link to={'/bookroom'}>          
              <button className="p-4 rounded-lg bg-gradient-to-r btn">
                Book Room
              </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectRoom;
