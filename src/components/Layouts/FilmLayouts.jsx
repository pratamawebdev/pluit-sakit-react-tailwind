const FilmLayouts = (props) => {
  const { title, children } = props;
  return (
    <section className="w-full bg-[#000000]">
      <div className="container mx-auto py-[70px]">
        <div className="flex justify-between items-center mb-[50px]">
          <h1 className="text-white text-[32px] font-bold">{title}</h1>
          <button className="bg-[#E50914] button flex text-white items-center py-[16px] px-[24px]">
            <span className="text-[14px] font-medium">Lebih Banyak</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="w-[28px] h-[28px]"
            >
              <path
                d="M10.5 21L17.5 14L10.5 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className=" grid-cols-1 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[21px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default FilmLayouts;
