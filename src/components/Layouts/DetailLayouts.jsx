const DetailLayouts = (props) => {
  const { title, children } = props;
  return (
    <section className="w-full bg-[#000000]">
      <div className="container mx-auto py-[70px]">
        <div className="flex justify-between items-center mb-[50px]">
          <h1 className="text-white text-[32px] font-bold">{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default DetailLayouts;
