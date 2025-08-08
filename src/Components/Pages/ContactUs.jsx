import React from "react";
import ShippingDetails from "../HomeComponents/ShippingDetails";
import FullWidth from "../Shared/FullWidth";
import Hero from "../ContactUsComponents/hero";
import ContactUsSection from "../ContactUsComponents/ContactUsSection";

const ContactUs = () => {
  return (
    <>
      <Hero />
      <ContactUsSection />
      <FullWidth className="bg-light-gray">
        <ShippingDetails />
      </FullWidth>
    </>
  );
};

export default ContactUs;
