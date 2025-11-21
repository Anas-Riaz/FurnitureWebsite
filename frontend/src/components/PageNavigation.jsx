const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className={`px-4 py-2 border rounded-md transition
        ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-black hover:text-white"
        }
        `}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 border rounded-md transition
          ${
            currentPage === page ? "bg-black text-white" : "hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className={`px-4 py-2 border rounded-md transition
        ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-black hover:text-white"
        }
        `}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
