import React from "react";
import { BsBuildings, BsThreeDotsVertical } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBedSolid, LiaTapeSolid } from "react-icons/lia";
import { LuNotebookPen } from "react-icons/lu";
import { PiWallet } from "react-icons/pi";

const PropertyCard = () => {
  return (
    <div className="bg-white p-3 rounded-2xl">
      <div className="flex justify-between gap-2 items-center mb-4">
        <div className="bg-gray-200 p-2 rounded-lg">
          <BsBuildings className="text-3xl"/>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <button className="flex gap-1 bg-[#179DFF29] justify-center items-center px-4 py-1 rounded-full text-[15px] text-primary">
            <LuNotebookPen className="text-lg" /> Leased
          </button>

          <BsThreeDotsVertical className="text-xl" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">207 Crystal Residence</h3>

        <div className="flex gap-2 items-center text-[15px]">
          <CiLocationOn />
          <p>Dubai City</p>
        </div>
        <div className="flex gap-2 items-center text-[15px]">
          <IoCalendarOutline />
          <p>Expires: 12 Dec 2025</p>
        </div>
        <div className="flex gap-2 items-center text-[15px]">
          <PiWallet />
          <p>AED 300,00</p>
        </div>
      </div>

      <div className="border-t flex justify-evenly mt-4 pt-4">
        <div className="flex gap-2 items-center justify-center">
          <LiaBedSolid className="text-2xl" />
          <p>3 Bed/R</p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <LiaTapeSolid className="text-3xl"/>
          <p>2343.23 FT</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
