import Input from "../../Elements/Input/Index";

const Search = () => {
  return (
    <div className="relative w-[309px] gap-[12px] flex">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <form>
        <Input
          className="w-full border-b pl-10 pr-4 py-2 placeholder:text-[16px] placeholder:font-medium focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Cari Film..."
        />
      </form>
    </div>
  );
};

export default Search;
