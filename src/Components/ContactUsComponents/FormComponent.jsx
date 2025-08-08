import Layout from "../Shared/Layout";
import ContactForm from "./ContactForm";
import Map from "./Map";

const FormComponent = () => {
  return (
    <Layout className="flex gap-7 flex-wrap ">
      <ContactForm />
      <Map />
    </Layout>
  );
};

export default FormComponent;
