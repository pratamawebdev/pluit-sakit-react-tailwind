const ActorLayouts = (props) => {
  const { title, children } = props;
  return (
    <section className="w-full bg-[#000000]">
      <div className="container mx-auto py-[70px]">
        <div className="flex justify-between items-center mb-[50px]">
          <h1 className="text-white text-[32px] font-bold">{title}</h1>
          <div className="flex gap-[7px]">
            <button className="bg-[#E50914] w-[83px] h-[59px] button flex text-white items-center py-[16px] px-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M31.25 12.5L18.75 25L31.25 37.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="bg-[#E50914] w-[83px] h-[59px] button flex text-white items-center py-[16px] px-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M18.75 37.5L31.25 25L18.75 12.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-[21px]">{children}</div>
      </div>
    </section>
  );
};

export default ActorLayouts;
