import CardDetails from "../Shared/CardDetails";
// import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const ProductsDisplayed = ({ data, selectedCategories }) => {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 600) {
        setItemsPerPage(3);
      } else if (width < 1374) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(9);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <div className="flex flex-col  w-full items-center gap-10">
        <h2 className="font-bold text-xl">
          {selectedCategories.charAt(0).toUpperCase() +
            selectedCategories.slice(1)}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 items-center ">
          {currentItems.map((product) => (
            <CardDetails product={product} />
          ))}
        </div>
        <ReactPaginate
          className="flex justify-between w-full  cursor-pointer"
          activeClassName="bg-black text-white px-3  rounded-2xl"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => setCurrentPage(e.selected)}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default ProductsDisplayed;
