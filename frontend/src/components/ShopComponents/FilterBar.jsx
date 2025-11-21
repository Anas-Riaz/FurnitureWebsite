import filter from "../../assets/Navbar/filter.png"

function FilterBar() {
  return (
    <div className="w-full p-4 flex flex-col lg:flex-row justify-between gap-4 lg:px-10 bg-[#F9F1E7]">
      <div className="flex gap-8 items-center justify-between">
        <p className="flex gap-4 text-[12px]">
          <img src={filter} alt="Filter" className="w-4 h-4" />
          Filter
        </p>
        <div className=" lg:w-px lg:h-5 lg:bg-[#9F9F9F]"></div>
        <p className="text-[12px]">Showing 1-16 of 32 results</p>
      </div>
      <div className="flex gap-8 items-center justify-between">
        <div className="flex gap-4 text-[12px] items-center justify-center">
          Show
          <div className="p-2 bg-white text-[#9F9F9F]">16</div>
        </div>
        <div className=" lg:w-px lg:h-5 lg:bg-[#9F9F9F]"></div>
        <div className="flex gap-4 text-[12px] items-center justify-center">
          Sort By
          <div className="py-2 px-6 bg-white text-[#9F9F9F]">Default</div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
