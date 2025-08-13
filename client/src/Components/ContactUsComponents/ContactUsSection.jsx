import Layout from "../Shared/Layout";
import ContactUsCards from "./ContactUsCards";
import FormComponent from "./FormComponent";

const ContactUsSection = () => {
  return (
    <>
      <div className="mb-20">
        <h2 className="capitalize text-4xl font-medium text-center mb-10">
          Contact Us
        </h2>
        <ContactUsCards />
        <FormComponent />
      </div>
    </>
  );
};

export default ContactUsSection;
