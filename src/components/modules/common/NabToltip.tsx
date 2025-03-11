"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const NabToltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative  flex items-center justify-center">
      <div className="relative">
        {/* Add Property Button */}
        <button
          className={cn(
            "absolute flex items-center justify-center whitespace-nowrap rounded-full bg-blue-500 text-white font-medium px-4 py-2 shadow-lg transition-all duration-300",
            isOpen
              ? "opacity-100 -translate-x-44 -translate-y-16"
              : "opacity-0 translate-x-0 translate-y-0 pointer-events-none"
          )}
          onClick={() => console.log("Add Property clicked")}
        >
          Add Property
        </button>

        {/* Contract Button */}
        <button
          className={cn(
            "absolute flex items-center justify-center rounded-full bg-blue-500 text-white font-medium px-4 py-2 shadow-lg transition-all duration-300",
            isOpen
              ? "opacity-100 -translate-x-6 -translate-y-28"
              : "opacity-0 translate-x-0 translate-y-0 pointer-events-none"
          )}
          onClick={() => console.log("Contract clicked")}
        >
          Contract
        </button>

        {/* Maintenance Button */}
        <button
          className={cn(
            "absolute flex items-center justify-center rounded-full bg-blue-500 text-white font-medium px-4 py-2 shadow-lg transition-all duration-300",
            isOpen
              ? "opacity-100 translate-x-20 -translate-y-16"
              : "opacity-0 translate-x-0 translate-y-0 pointer-events-none"
          )}
          onClick={() => console.log("Maintenance clicked")}
        >
          Maintenance
        </button>

        {/* Main Button */}
        <button
          className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={toggleMenu}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              isOpen && "rotate-45"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default NabToltip;
