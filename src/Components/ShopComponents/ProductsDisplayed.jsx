import CardDetails from "../Shared/CardDetails";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const ProductsDisplayed = ({ data, selectedCategories }) => {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 400) {
      setItemsPerPage(3);
    } else if (width < 800) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(9);
    }
  }, []);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <div className="flex flex-col w-full items-center gap-10">
        <h2 className="font-bold text-xl">{selectedCategories}</h2>
        <div className="flex flex-wrap gap-6 items-center ">
          {currentItems.map((product) => (
            <CardDetails product={product} />
          ))}
        </div>
        <ReactPaginate
          className="flex justify-between w-full  cursor-pointer"
          activeClassName="bg-black text-white px-3  rounded-2xl"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(e) => setCurrentPage(e.selected)}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default ProductsDisplayed;
