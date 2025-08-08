import fastDelivery from "../../assets/fastDelivery.png";
import moneyBack from "../../assets/moneyBack.png";
import secure from "../../assets/secure.png";
import support from "../../assets/support.png";
import ShippingCard from "./ShippingCard";

const ShippingDetails = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full justify-center py-10">
      <ShippingCard
        image={fastDelivery}
        title={"Free Shipping"}
        description={"Order above $200"}
      />
      <ShippingCard
        image={moneyBack}
        title={"Money-back"}
        description={"30 days guarantee"}
      />
      <ShippingCard
        image={secure}
        title={"Secure Payments"}
        description={"Secured by Stripe"}
      />
      <ShippingCard
        image={support}
        title={"24/7 Support"}
        description={"Phone and Email support"}
      />
    </div>
  );
};

export default ShippingDetails;
