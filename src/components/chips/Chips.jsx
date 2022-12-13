import React from "react";

const Chips = ({ name, className }) => {
  return (
    <div className={`mt-3 border-2 border-black rounded-full px-5 py-1 ${className}`}>
      {name}
    </div>
  );
};

export default Chips;
