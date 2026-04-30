// Interface
interface FilterComponent {
  filterTag: string[];
  setFilterTag: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterComponent = ({ filterTag, setFilterTag }: FilterComponent) => {
  return (
    filterTag.length != 0 && (
      <div className="bg-white rounded-md w-full h-20 -my-10 relative flex items-center justify-between px-[4%]">
        <div className="flex gap-4">
          {filterTag.map((item) => (
            <div className="flex flex-row items-center" key={item}>
              <h1 className="bg-[#EFF6F7] text-[#619A9A] font-black py-2 px-4 rounded-l-xl">
                {item}
              </h1>
              <button
                className="text-white bg-[#56A8A5] py-2 px-4 font-semibold hover:bg-[#283838] duration-700 cursor-pointer"
                onClick={() =>
                  setFilterTag(
                    filterTag.filter((actualsTag) => actualsTag !== item),
                  )
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button
          className="text-[#619A9A] font-black cursor-pointer hover:underline"
          onClick={() => setFilterTag([])}
        >
          Clear
        </button>
      </div>
    )
  );
};

export default FilterComponent;
