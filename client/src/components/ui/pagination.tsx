import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="mr-2 bg-gray-200 p-2 rounded-full"
      >
        <IoIosArrowBack />
      </button>
      <span className="text-gray-700 mr-2">
        {currentPage} de {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="ml-2 bg-gray-200 p-2 rounded-full"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
