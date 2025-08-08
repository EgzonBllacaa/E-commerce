import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const nextPage = setCurrentPage((prev) => prev + 1);
  const previousPage = setCurrentPage((prev) => prev - 1);
  const pages = [
    ...Array.from({ length: totalPages }).slice(currentPage, currentPage + 4),
  ];
  return (
    <div className="flex justify-between cursor-pointer">
      <button
        className="cursor-pointer"
        disabled={currentPage === 1}
        onClick={previousPage}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-black" />
      </button>
      <div className="flex flex-wrap items-center  gap-6 ">
        {[...Array(pages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={
              currentPage === index + 1
                ? "bg-black cursor-pointer text-white px-3 py-1  rounded-xl"
                : "px-3 py-1 cursor-pointer"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={nextPage}
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-black" />
      </button>
    </div>
  );
};

export default Pagination;
