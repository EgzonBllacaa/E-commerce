import React from "react";

const CountDown = ({ currentTime, timeLine }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="p-2.5 text-4xl font-medium leading-9 bg-absolute_white">
        {currentTime}
      </span>
      <p className="text-sm">{timeLine}</p>
    </div>
  );
};

export default CountDown;
