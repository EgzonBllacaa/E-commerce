import React from "react";
import CountDown from "./CountDown";

const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-4 ">
      <CountDown currentTime={days} timeLine={"Days"} />
      <CountDown currentTime={hours} timeLine={"Hours"} />
      <CountDown currentTime={minutes} timeLine={"Minutes"} />
      <CountDown currentTime={seconds} timeLine={"Seconds"} />
    </div>
  );
};

export default Timer;
