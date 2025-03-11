import React from "react";

const MyBtn = ({ name }: { name: string }) => {
  return (
    <button className="md:text-2xl text-[17px] px-24 py-3 bg-primary text-white rounded-full">
      {name}
    </button>
  );
};

export default MyBtn;
