const HeroLayouts = (props) => {
  const { children } = props;
  return (
    <section className="w-full hero-header hero h-full">
      <div className="container mx-auto max-w-[1296px] h-full py-36 px-4 md:px-0 gap-4 md:gap-8">
        {children}
      </div>
    </section>
  );
};

export default HeroLayouts;
