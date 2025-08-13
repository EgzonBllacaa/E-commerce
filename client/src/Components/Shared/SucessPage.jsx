import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SucessPage = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen text-center">
      <FontAwesomeIcon
        icon={faCheck}
        className="bg-accent p-6 rounded-4xl text-4xl"
      />
      <h3 className="font-medium text-5xl mb-2">Thank you for your purchase</h3>
      <div>
        <p>We've received your order will ship in 5-7 business days</p>
        <Link to={"/shop"} className="hover:underline text-blue-900">
          Go to shop page
        </Link>
      </div>
    </div>
  );
};

export default SucessPage;
