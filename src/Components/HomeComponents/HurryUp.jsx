import React, { useEffect, useState } from "react";
import ButtonCta from "../Shared/ButtonCta";

// import CountDown from "../Shared/CountDown";
// import Layout from "../Shared/Layout";
import FullWidth from "../Shared/FullWidth";
import Timer from "../Shared/Timer";
import { Link } from "react-router-dom";

const HurryUp = ({ img, title, description, timer = false }) => {
  const initialTime =
    10 * 24 * 60 * 60 * 1000 + 15 * 60 * 60 * 1000 + 40 * 60 * 1000 + 20 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { totalSeconds, days, hours, minutes, seconds };
  };
  const { days, hours, minutes, seconds } = formatTime(timeLeft);
  return (
    <FullWidth className={`bg-light-gray`}>
      <div className="flex items-center flex-wrap">
        <img src={img} className="w-4xl" alt="" />
        <div className="sm:pl-20 px-5 py-40 bg-light-gray flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-bold">Limited Edition</span>
            <h3 className="uppercase text-4xl font-medium">{title}</h3>
            <p className="text-2xl">{description}</p>
          </div>
          {timer === true && (
            <div className="flex flex-col gap-3">
              <span>Offer expires in:</span>
              <Timer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </div>
          )}
          <Link to={`/shop`}>
            <ButtonCta
              className={"w-fit"}
              accent={true}
              children={"Shop now"}
            />
          </Link>
        </div>
      </div>
    </FullWidth>
  );
};

export default HurryUp;
