import React from "react";
import Layout from "../Shared/Layout";
import ShippingCard from "../HomeComponents/ShippingCard";
import mail from "../../assets/mail_icon.png";
import contact from "../../assets/contact_icon.png";
import location from "../../assets/location_icon.png";

const ContactUsCards = () => {
  return (
    <Layout className="flex flex-col items-center mb-10">
      <div className="flex gap-6 w-full flex-wrap">
        <ShippingCard
          className="w-full items-center text-center"
          classNameTitle="text-zinc-500 font-bold"
          classNameParagraph="font-bold "
          image={location}
          title={"Address"}
          description={`234 Hai Trieu, Ho Chi Minh City, Viet Nam`}
        />
        <ShippingCard
          className="w-full items-center text-center"
          classNameTitle="text-zinc-500 font-bold"
          classNameParagraph="font-bold "
          image={contact}
          title={"Contact Us"}
          description={`+84 234 567 890`}
        />
        <ShippingCard
          className="w-full items-center text-center"
          classNameTitle="text-zinc-500 font-bold"
          classNameParagraph="font-bold "
          image={mail}
          title={"Email"}
          description={`hello@3legant.com`}
        />
      </div>
    </Layout>
  );
};

export default ContactUsCards;
