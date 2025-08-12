import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReadMore = ({ children = "Read More", className }) => {
  return (
    <div
      className={`hover:border-b text-neutral_07-100 flex gap-2 w-fit items-center  ${className}`}
    >
      {children}
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};

export default ReadMore;
