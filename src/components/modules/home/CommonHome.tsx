import React from "react";
import PropertyCard from "./homeCard/PropertyCard";

const CommonHome = () => {
  const data = [1, 2, 3, 4, 5, 6,2,2,2,2];
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-3">
        {data.map((item, idx) => (
          <PropertyCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CommonHome;
