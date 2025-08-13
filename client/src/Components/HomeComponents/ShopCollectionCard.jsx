import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skinCare from "../../assets/skinCare.jpg";
import smartPhones from "../../assets/SMARTPHONE.jpg";
import sportsAccessories from "../../assets/sportsAccessories.jpg";
import { Link } from "react-router-dom";

const images = {
  "skin-care": skinCare,
  smartphones: smartPhones,
  "sports-accessories": sportsAccessories,
};

const ShopCollectionCard = ({ item }) => {
  if (!item.slug) return;
  const imgSrc = images[item.slug];
  const objectPosition =
    item.slug === "sports-accessories" ? "center 40%" : "center 20%";

  return (
    <div
      key={item}
      className={`bg-light-gray ${
        images[item.slug] === skinCare ? "row-span-2 " : ""
      } relative column-span-2`}
    >
      <Link to={`/categories/${item.slug}`}>
        {imgSrc && (
          <img
            className={`${
              imgSrc === skinCare ? "h-full" : "h-[400px]"
            } w-full object-cover   `}
            style={{ objectPosition }}
            src={imgSrc}
            alt=""
          />
        )}
        <div
          className={`absolute right-2  ${
            imgSrc === skinCare ? "text-white top-2" : "text-black bottom-2"
          }`}
        >
          <h2 className="text-4xl font-medium text-white">{item.name}</h2>
          <span className="flex items-center gap-1 border-b w-fit text-white ">
            Collections <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ShopCollectionCard;
