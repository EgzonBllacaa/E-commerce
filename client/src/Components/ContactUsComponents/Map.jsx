import React from "react";
import locationMap from "../../assets/location_map_icon.png";

const Map = () => {
  return (
    <>
      <div className="relative lg:w-[calc(50%-1rem)]  w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569013.506414044!2d-118.37446160537726!3d33.986932310988585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e1!3m2!1sen!2s!4v1752596127783!5m2!1sen!2s"
          className="w-full"
          height={"400"}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <img
          className="max-w-16 min-w-16 absolute top-1/2 left-1/2 -translate-x-1/2"
          src={locationMap}
          alt=""
        />
      </div>
    </>
  );
};

export default Map;
